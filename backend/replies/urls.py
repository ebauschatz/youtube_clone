from django.urls import path
from . import views

urlpatterns = [
    path('endpoint/path/', views.function_to_run),
]