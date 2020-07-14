FROM ubuntu:18.04

RUN apt update -y && apt install -y python3 python3-pip

WORKDIR /home

COPY app app
COPY requirements.txt requirements.txt
COPY run.py run.py

RUN pip3 install -r requirements.txt

EXPOSE 5000

ENTRYPOINT python3 run.py
