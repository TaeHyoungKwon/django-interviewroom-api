from django.contrib import admin
from django.urls import path, include

from . import views

app_name='room'

urlpatterns = [
    path('api/room_list/', views.RoomAPIView.as_view(), name="room_list"),
    path('api/time_list/', views.TimeAPIView.as_view(), name="time_list"),
]
