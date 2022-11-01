from django.urls import path
from . import views

urlpatterns = [
    path('comment/<int:comment_id>/', views.get_replies_by_comment_id),
]