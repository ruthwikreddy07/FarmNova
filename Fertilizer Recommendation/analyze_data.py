import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load the dataset
df = pd.read_csv("data_core.csv")

# Show class distribution of the target variable
print("\n🔍 Fertilizer Label Distribution:\n")
print(df['Fertilizer Name'].value_counts())

# Visualize the imbalance
plt.figure(figsize=(10, 6))
sns.countplot(data=df, y='Fertilizer Name', order=df['Fertilizer Name'].value_counts().index)
plt.title("Fertilizer Distribution")
plt.xlabel("Count")
plt.ylabel("Fertilizer Type")
plt.tight_layout()
plt.show()
