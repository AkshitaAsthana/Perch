
import { GoogleGenAI } from "@google/genai";
import { RESTAURANT_INFO, MENU_ITEMS } from "../constants";

const getApiKey = () => {
  try {
    // Check both standard process.env and our window-level shim
    return (process?.env?.API_KEY) || (window as any).process?.env?.API_KEY || "";
  } catch (e) {
    return "";
  }
};

export const getConciergeResponse = async (query: string) => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return "Bonjour! I'm currently in a quiet mode as my API key is being configured. Please feel free to check our menu or call our host stand at (213) 802-1770.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const menuSummary = MENU_ITEMS.map(item => `${item.name}: ${item.description} ($${item.price})`).join('\n');
    
    const systemInstruction = `
      You are the Perch LA Digital Concierge. 
      Perch LA is a famous French-inspired rooftop bistro in Downtown LA.
      Information:
      - Address: ${RESTAURANT_INFO.address}
      - Phone: ${RESTAURANT_INFO.phone}
      - Hours: ${JSON.stringify(RESTAURANT_INFO.hours)}
      - Menu Highlights: 
      ${menuSummary}
      - Key Rule: Reservations are on the 15th floor. The roof bar is the 16th floor.
      
      Provide polite, professional, and slightly sophisticated "French-flair" responses. 
      Help guests with menu recommendations, location info, and booking guidance.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, I'm having trouble processing your request. Please call us directly at (213) 802-1770.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Bonjour! I'm currently resting. Please feel free to check our menu or call our host stand for immediate assistance.";
  }
};
