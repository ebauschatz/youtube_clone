from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_comments),
    path('video/<video_id>/', views.get_comments_by_video_id),
    path('<int:comment_id>/', views.update_comment),
    path('like/<int:comment_id>/', views.like_comment),
    path('dislike/<int:comment_id>/', views.dislike_comment),
]