@echo off
set SCRIPT_DIR=%~dp0

REM Active l'environnement venv
cd /d "%SCRIPT_DIR%"
call venv\Scripts\activate

REM Vérifie qu'on a un fichier audio en argument
if "%~1"=="" (
    echo USAGE: glisse un fichier audio (mp3 ou wav) sur transcrire.bat
    goto end
)

REM Lance Whisper (modèle small, français)
whisper "%~1" --model small --language fr

echo.
echo Transcription terminée : fichier .txt généré dans le dossier.
pause

:end
