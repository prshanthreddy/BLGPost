from django.shortcuts import render
from .models import Blog
from rest_framework.response import Response
from .serializer import BlogSerializer
from rest_framework.views import APIView


# Create your views here.

class BlogView(APIView):
    def get(self, request):
        blogs = Blog.objects.all()
        serializer = BlogSerializer(blogs, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response (serializer.data)
        else:
            return Response(serializer.errors)

    def put(self, request, pk):
        blog = Blog.objects.get(id=pk)
        serializer = BlogSerializer(blog, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def delete(self,request, pk):
        blog = Blog.objects.get(id=pk)
        blog.delete()
        return Response("Blog deleted successfully")
