export function waitFor(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export function formatName(name: string): string {
  if (name.includes("♀")) {
    return name.replace("♀", "-f");
  } else if (name.includes("♂")) {
    return name.replace("♂", "-m");
  }else if (name.includes("Mime Jr.")) {
    return name.replace("Mime Jr.", "mime-jr");
  }  else if (name.includes(". ")) {
    return name.replace(". ", "-");
  } else if (name.includes("Farfetch'd")) {
    return name.replace("Farfetch'd", "farfetchd");
  } else if (name.includes(" ")) {
    return name.replace(" ", "-");
  }else if (name.includes("Flabébé")) {
    return name.replace("Flabébé", "flabebe");
  }else {
    return name;
  }
}
