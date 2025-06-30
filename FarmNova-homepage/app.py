import streamlit as st

# Read HTML content
with open("homepage/index.html", 'r', encoding='utf-8') as f:
    html_content = f.read()

# Display HTML using components
st.set_page_config(page_title="FarmNova", layout="wide")
st.components.v1.html(html_content, height=800, scrolling=True)
