from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_comments),
    path('video/<video_id>/', views.get_comments_by_video_id),
]