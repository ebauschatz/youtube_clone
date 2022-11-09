from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from rest_framework import status
from .models import Comment
from .serializers import CommentSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_comments_by_video_id(request, video_id):
    comments = Comment.objects.filter(video_id=video_id)
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_comments(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_comment(request, comment_id):
    comment = get_object_or_404(Comment, id=comment_id)
    serializer = CommentSerializer(comment, data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def like_comment(request, comment_id):
    comment = get_object_or_404(Comment, id=comment_id)
    new_likes = {'likes': comment.likes + 1}
    serializer = CommentSerializer(comment, data=new_likes, partial=True)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def dislike_comment(request, comment_id):
    comment = get_object_or_404(Comment, id=comment_id)
    new_dislikes = {'dislikes': comment.likes + 1}
    serializer = CommentSerializer(comment, data=new_dislikes, partial=True)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)