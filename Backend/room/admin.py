from django.contrib import admin
from .models import Room, Time




class RoomAdmin(admin.ModelAdmin):
    list_filter = ('name',)

admin.site.register(Room,RoomAdmin);


class TimeAdmin(admin.ModelAdmin):

    list_per_page = 10 #페이지 당 갯수
    list_display = (
        'room',
        'start_time',
        'end_time',
        'interviewee',
    )
    search_fields= ('interviewer', 'room')
    #list_editable = ('start_time', 'end_time', 'interviewee')
    list_filter = ('room','start_time')
    ordering = ('room', 'start_time',)
    

admin.site.register(Time, TimeAdmin);

