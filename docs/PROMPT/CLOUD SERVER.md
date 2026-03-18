GitHub  https://github.com/strazzusochr/JetBRAIN.git



JetBRAIN ghp\_7jI3Qdfv7nk49W2ktJgAqTXJqDBT553In8wQ







Huggingface  https://huggingface.co/spaces/Wrzzzrzr/JetBRAIN



JetBRAIN hf\_IksgQdBifGQAWOXOFISNvPMhqbzXgFtXwN





https://gitkraken.dev/launchpad/personal?workspace=5cbba4c19fb14c5bb6f963f68de6d0b0\&prs=github\&issues=GitHub







https://gitlab.com/strazzusochr/jetbrain#







J

JetBRAIN

Project ID: 80365571

The repository for this project is empty

To get started, clone the repository or upload some files.



Command line instructions

You can also upload existing files from your computer using the instructions below.



Configure your Git identity

Get started with Git and learn how to configure it.



Local

Global

Git local setup

Configure your Git identity locally to use it only for this project:



git config --local user.name "Christian Strazzuso"

git config --local user.email "strazzusochr@gmail.com"

Add files

Push files to this repository using SSH or HTTPS. If you're unsure, we recommend SSH.



SSH

HTTPS

How to use SSH keys?



Create a new repository

git clone git@gitlab.com:strazzusochr/jetbrain.git

cd jetbrain

git switch --create main

touch README.md

git add README.md

git commit -m "add README"

git push --set-upstream origin main

Push an existing folder

Go to your folder

cd existing\_folder

Configure the Git repository

git init --initial-branch=main --object-format=sha1

git remote add origin git@gitlab.com:strazzusochr/jetbrain.git

git add .

git commit -m "Initial commit"

git push --set-upstream origin main

Push an existing Git repository

Go to your repository

cd existing\_repo

Configure the Git repository

git remote rename origin old-origin

git remote add origin git@gitlab.com:strazzusochr/jetbrain.git

git push --set-upstream origin --all

git push --set-upstream origin --tags

Project information

















🐳 Get started with your Docker Space!

Your new Space has been created, follow these steps to get started (or read the full documentation)



Start by cloning this repo by using:



Use an access token as git password/credential





\# When prompted for a password, use an access token with write permissions.

\# Generate one from your settings: https://huggingface.co/settings/tokens

git clone https://huggingface.co/spaces/Wrzzzrzr/JetBRAIN



\# Make sure the hf CLI is installed

powershell -ExecutionPolicy ByPass -c "irm https://hf.co/cli/install.ps1 | iex"



\# Download the Space

hf download Wrzzzrzr/JetBRAIN --repo-type=space

Let's create a simple Python app using FastAPI:



requirements.txt





fastapi

uvicorn\[standard]

Hint You can also create the requirements file file directly in your browser.

app.py





from fastapi import FastAPI



app = FastAPI()



@app.get("/")

def greet\_json():

&#x20;   return {"Hello": "World!"}

Hint You can also create the app file file directly in your browser.

Create your Dockerfile:





\# Read the doc: https://huggingface.co/docs/hub/spaces-sdks-docker

\# you will also find guides on how best to write your Dockerfile



FROM python:3.9



RUN useradd -m -u 1000 user

USER user

ENV PATH="/home/user/.local/bin:$PATH"



WORKDIR /app



COPY --chown=user ./requirements.txt requirements.txt

RUN pip install --no-cache-dir --upgrade -r requirements.txt



COPY --chown=user . /app

CMD \["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "7860"]

Hint Alternatively, you can create the Dockerfile file directly in your browser.

Then commit and push:





git add requirements.txt app.py Dockerfile

git commit -m "Add application file"

git push











Fügen Sie die CLI-Fähigkeit hinzu

Fähigkeiten geben Ihrem Agenten den Kontext, den er benötigt, um Tools effektiv zu nutzen. Installieren Sie die CLI-Fähigkeit, damit Ihr Agent jeden kennt hf Befehl und bleibt mit den neuesten Updates auf dem Laufenden. Erfahren Sie mehr über Skills unter agentskills.io.



Kopiert

\# global installieren (in allen Projekten verfügbar)

HF-Fähigkeiten hinzufügen --claude --global



\# oder nur für das aktuelle Projekt installieren

HF-Fähigkeiten hinzufügen --claude

Der Skill wird aus Ihrer lokal installierten CLI-Version generiert und ist daher immer auf dem neuesten Stand.



Dies funktioniert auch mit anderen Codiermitteln:



Kopiert

HF-Fähigkeiten hinzufügen --codex

hf-Fähigkeiten hinzufügen --cursor

HF-Fähigkeiten hinzufügen --opencode

Alternativ können Sie über das Claude Code-Plugin-System installieren:



Kopiert

Claude

/Plugin-Marktplatz fügen Sie Huggingface/Skills hinzu

/Plugin installieren hf-cli@huggingface/Fähigkeiten







