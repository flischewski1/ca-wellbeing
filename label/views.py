
from django.http import HttpResponse
from django.shortcuts import render
from label.models import Image
from label.forms import LabelForm
import datetime
import string
import random
def id_generator(size=16, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


progress_dict = {
    "1":5,
    "11":10,
    "111":15,
    "1111":20
}





def standardLogic(n, request):
    
    data = Image.objects.all()[0:5]
    form = LabelForm()
    context = {
        'data' : data,
        'form' : form
    }
    
    if request.method == "POST": 
        try:
            progress = request.COOKIES.get("ExperimentCounter")
            if(progress == "11111"): 
                return render(request, "end.html")
            i = progress_dict[progress]
            m = i + 5
            data = Image.objects.all()[i:m]
            form = LabelForm()
            context = {
            'data' : data,
            'form' : form
            }
            
            return render(request, f"group{n}.html", context)
        except:
            print(n)
            return render(request,f"group{n}.html", context)
    else:
        return render(request,f"group{n}.html", context)
            
        

 # task endpoint
   
def group1(request): 
   return standardLogic(1,request)

