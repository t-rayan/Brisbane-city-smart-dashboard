export function parseLocationName(rawName: string) {
    // Case 1: "Johnson Rd (Adermann Br), Forestdale" (Has comma)
    if (rawName.includes(',')) {
      const [street, suburb] = rawName.split(',');
      return {
        title: street.trim(),   // "Johnson Rd (Adermann Br)"
        subtitle: suburb.trim() // "Forestdale"
      };
    }
    
    // Case 2: "Moggill (BCC) AL" (No comma, has brackets)
    if (rawName.includes('(')) {
      const parts = rawName.split('(');
      const mainName = parts[0].trim(); // "Moggill"
      
      // We put the rest back together for the subtitle
      // This handles "(BCC) AL"
      const details = `(${parts.slice(1).join('(')}`; 
      
      return {
        title: mainName,   // "Moggill"
        subtitle: details  // "(BCC) AL"
      };
    }
  
    // Case 3: "Brisbane City" (Simple string)
    return {
      title: rawName,
      subtitle: "Brisbane" // Default fallback
    };
  }