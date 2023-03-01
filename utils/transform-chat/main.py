import tkinter as tk
import re


def main():
    root_window = tk.Tk()
    root_window.geometry("500x500")
    root_window.title("Conversor de chat de texto")

    # first upper level
    label_inserte_texto_aqui = tk.Label(
        root_window, text="Inserte el chat de Zoom aqui:"
    )
    label_inserte_texto_aqui.pack()

    # text where you insert the text
    global input_text_wgt
    input_text_wgt = tk.Text(root_window)
    input_text_wgt.pack()

    # button to capture the text
    read_text_button = tk.Button(root_window, text="Convert!", command=convert_text)
    read_text_button.pack()

    # text where the output is displayed

    root_window.mainloop()


def convert_text():
    text_read: str = input_text_wgt.get("1.0", "end")
    transfom_text(text_read)


def transfom_text(body: str):
    body = re.sub(r"\nYou  to  Everyone \d\:\d\d [AP]M\n", " ", body)
    print(body)


if __name__ == "__main__":
    exit(main())
