import uuid
from datetime import datetime

from django.db import models
from django.conf import settings


class Room(models.Model):
    '''
    '''
    uuid = models.UUIDField(
        primary_key=True,
        unique=True,
        editable=False,
        default=uuid.uuid4,
        verbose_name='PK'
    )
    name = models.CharField(max_length=100, unique=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)

    class Meta:
        verbose_name = ("면접실 관리")
        verbose_name_plural = ("면접실 관리")
    

class Time(models.Model):
    '''
    '''
    
    uuid = models.UUIDField(
            primary_key=True,
            unique=True,
            editable=False,
            default=uuid.uuid4,
            verbose_name='PK'
        )
        
    room = models.ForeignKey(
        Room, 
        on_delete=models.CASCADE, 
        related_name='times',
        verbose_name='면접실',
        help_text="해당하는 면접실을 선택 혹은 추가하세요.")
    
    start_time = models.DateTimeField(
        verbose_name='시작 시간',
        help_text="면접 시작 시간을 선택하세요. ex)2018-01-01 00:00:00 "
        ) 
    end_time = models.DateTimeField(
        verbose_name='종료 시간',
        help_text="면접 종료 시간을 선택하세요. ex)2018-12-31 23:59:59 "
        )
    
    interviewee = models.TextField(
        verbose_name='면접자',
        help_text="ex)면접자1 면접자2 면접자3 ..."
        )

    interviewer = models.TextField(
        verbose_name='면접관',
        help_text="ex)면접관1 면접관2 면접관3 ..."
        )
    
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        f_start_t = self.start_time.strftime("%Y-%m-%d %H시 %M분")
        f_end_t = self.end_time.strftime("%Y-%m-%d %H시 %M분")
        
        return str(self.room) + ": " + "("+ f_start_t + " ~ " + f_end_t +")"

    class Meta:
        verbose_name = ("면접시간 관리")
        verbose_name_plural = ("면접시간 관리")

