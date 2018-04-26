from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize
from .models import Room, Time
from rest_framework import generics, mixins
from .serializers import RoomSerializer, TimeSerializer


class RoomAPIView(generics.ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class TimeAPIView(generics.ListCreateAPIView):
    queryset = Time.objects.all()
    serializer_class = TimeSerializer