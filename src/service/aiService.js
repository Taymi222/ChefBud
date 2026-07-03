const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const API_KEY =
  import.meta.env.VITE_GEMINI_API_KEY;

export async function generateRecipes(ingredients) {

  const prompt = `
You are an experienced professional chef and recipe development expert.

Your task is to recommend recipes based ONLY on the ingredients provided by the user.

AVAILABLE INGREDIENTS

${ingredients.join("\n")}

IMPORTANT RULES

1. Generate EXACTLY 3 different recipes.

2. Every recipe must be practical, realistic and suitable for home cooking.

3. Use ONLY the user's provided ingredients as REQUIRED ingredients.

4. Preserve ingredient quantities and units exactly as written.

5. Optional ingredients are allowed ONLY if they improve flavour or presentation.

6. Never introduce new REQUIRED ingredients.

7. Maximize the use of the available ingredients.

8. If fewer than three completely different recipes are possible, create creative variations.

9. Servings must NEVER exceed 2.

Allowed values:
- "1"
- "1-2"
- "2"

10. Difficulty must be EXACTLY one of:
Easy
Medium
Hard

11. Description must be ONE sentence.
Maximum 20 words.

12. whySuggested must explain why the recipe fits the available ingredients.

13. Instructions:
Return between 6 and 10 steps.
Each step should contain ONE cooking action.

14. Return EXACTLY 3 cooking tips.

15. Never use null.

16. Never omit any field.

17. Return ONLY valid JSON.

18. No markdown.

19. No explanations.

20. No code fences.

The JSON must look EXACTLY like this:

{
  "recipes": [
    {
      "title": "",
      "description": "",
      "whySuggested": "",
      "prepTime": "",
      "cookTime": "",
      "difficulty": "",
      "servings": "",
      "ingredients": [],
      "optionalIngredients": [],
      "instructions": [],
      "tips": []
    },
    {
      "title": "",
      "description": "",
      "whySuggested": "",
      "prepTime": "",
      "cookTime": "",
      "difficulty": "",
      "servings": "",
      "ingredients": [],
      "optionalIngredients": [],
      "instructions": [],
      "tips": []
    },
    {
      "title": "",
      "description": "",
      "whySuggested": "",
      "prepTime": "",
      "cookTime": "",
      "difficulty": "",
      "servings": "",
      "ingredients": [],
      "optionalIngredients": [],
      "instructions": [],
      "tips": []
    }
  ]
}

Return ONLY the JSON object.
`;

  // console.log("Ingredients:", ingredients);
  // console.log("Gemini Key:", API_KEY);

  const response = await fetch(
    `${API_URL}?key=${API_KEY}`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({

        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],

        generationConfig: {
          temperature: 0.8,
          responseMimeType: "application/json",
        },

      }),

    }
  );

  if (!response.ok) {

    const error = await response.text();

    console.error(error);

    throw new Error(
      "Failed to generate recipes."
    );

  }

  const data = await response.json();

  console.log("Gemini Response:", data);

  const content =
    data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!content) {

    throw new Error(
      "No response received from Gemini."
    );

  }

  const cleaned = content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  console.log("Cleaned JSON:", cleaned);

  const parsed = JSON.parse(cleaned);

  return parsed.recipes.map((recipe) => ({
    id: crypto.randomUUID(),
    ...recipe,
  }));

}