from django import forms


class EmailForm(forms.Form):
    messages = forms.CharField(widget=forms.Textarea)
    email = forms.EmailField()
