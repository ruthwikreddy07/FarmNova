import streamlit as st

st.set_page_config(page_title="FarmNova", layout="wide")

st.title("🌱 Welcome to FarmNova Dashboard")
st.markdown("Smart farming made easy — access the full homepage below:")

# Embed your deployed homepage
st.components.v1.iframe("https://farmnova.netlify.app/", height=900)
