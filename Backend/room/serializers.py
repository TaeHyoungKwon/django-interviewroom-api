from rest_framework import serializers
from .models import Room, Time


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = (
            'name', 
            'updated_at', 
            'created_at', 
            'pk')


class TimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Time
        fields = (
            'room', 
            'start_time', 
            'end_time',
            'interviewee',
            'interviewer', 
            'updated_at', 
            'created_at', 
            'pk')