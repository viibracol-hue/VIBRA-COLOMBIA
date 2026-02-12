
import { GoogleGenAI, Type } from "@google/genai";

export async function getViralTrends() {
  /* Use process.env.API_KEY directly for initialization as per @google/genai guidelines */
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Genera 3 títulos de noticias virales (ficticias pero realistas) sobre la cultura pop en Colombia hoy. Mantén el tono juvenil y dinámico de VIBRA Colombia.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              category: { type: Type.STRING },
              urgency: { type: Type.STRING, description: "Baja, Media, Alta" }
            },
            required: ["title", "category", "urgency"]
          }
        }
      }
    });
    /* Access .text property directly and trim whitespace before parsing JSON */
    const jsonStr = response.text?.trim() || '[]';
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Error:", error);
    return [];
  }
}
