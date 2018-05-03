from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize
from .models import Room, Time
from rest_framework import generics, mixins
from .serializers import RoomSerializer, TimeSerializer
from django.db.models import Q

from datetime import datetime as dt
import datetime

class RoomAPIView(generics.ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class TimeAPIView(generics.ListCreateAPIView):
    serializer_class = TimeSerializer

    def get_queryset(self):
        time_pk = self.kwargs['time_pk']
        qs = Time.objects.filter(room=time_pk).order_by("start_time")

        start = dt.today().date()
        end = dt.today().date() + datetime.timedelta(days=1)

        qs = qs.filter(Q(start_time__get=start) and Q(end_time__lte=end))
        return qs