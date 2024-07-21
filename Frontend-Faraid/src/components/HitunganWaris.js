const calculateInheritance = (presence) => {
  let result = {};

  // Aturan untuk Ayah (A1)
  if (!presence.A5 && !presence.A6) {
    result.A1 = "sisa";
  } else if (presence.A5 && presence.A6 && presence.B1 && presence.B2) {
    result.A1 = "1/6";
  }

  // Aturan untuk Ibu (A2)
  if (
    !presence.A5 &&
    !presence.A6 &&
    !presence.B1 &&
    !presence.B2 &&
    (!presence.C1 || presence.C1 === 1) &&
    (!presence.C2 || presence.C2 === 1)
  ) {
    result.A2 = "1/3";
  } else if (
    presence.A5 &&
    presence.A6 &&
    presence.B1 &&
    presence.B2 &&
    presence.C1 > 1 &&
    presence.C2 > 1
  ) {
    result.A2 = "1/6";
  }

  // Aturan untuk Suami (A3)
  if (!presence.A5 && !presence.A6 && !presence.B1 && !presence.B2) {
    result.A3 = "1/2";
  } else if (presence.A5 || presence.A6 || presence.B1 || presence.B2) {
    result.A3 = "1/4";
  }

  // Aturan untuk Istri (A4)
  if (!presence.A5 && !presence.A6 && !presence.B1 && !presence.B2) {
    result.A4 = "1/4";
  } else if (presence.A5 || presence.A6 || presence.B1 || presence.B2) {
    result.A4 = "1/8";
  }

  // Aturan untuk Anak laki-laki (A5)
  if (!presence.A6) {
    result.A5 = "sisa";
  } else if (presence.A6) {
    result.A5 = "2/3";
  }

  // Aturan untuk Anak perempuan (A6)
  if (presence.A5) {
    result.A6 = "sisa";
  } else if (!presence.A5 && presence.A6 > 1) {
    result.A6 = "2/3";
  } else if (!presence.A5 && presence.A6 === 1) {
    result.A6 = "1/2";
  }

  // Aturan untuk Kakek (B3)
  if (
    presence.A5 &&
    presence.A6 &&
    presence.B1 &&
    presence.B2 &&
    !presence.A1
  ) {
    result.B3 = "1/6";
  } else if (
    !presence.A5 &&
    !presence.A6 &&
    !presence.B1 &&
    !presence.B2 &&
    !presence.A1
  ) {
    result.B3 = "sisa";
  }

  // Aturan untuk Nenek dari Ayah (B5)
  if (!presence.A1 && !presence.A2) {
    result.B5 = "1/6";
  } else if (presence.A1 && !presence.A2) {
    result.B5 = "1/6";
  }

  // Aturan untuk Cucu laki-laki (B1)
  if (!presence.A6) {
    result.B1 = "sisa";
  } else if (presence.A6) {
    result.B1 = "2/3";
  }

  // Aturan untuk Cucu perempuan (B2)
  if (!presence.A5 && !presence.A6 && !presence.B1) {
    result.B2 = "1/2";
  } else if (presence.B2 > 1 && !presence.A5 && !presence.A6 && !presence.B1) {
    result.B2 = "2/3";
  } else if (!presence.A5 && presence.A6 && !presence.B1) {
    result.B2 = "1/6";
  }

  // Aturan untuk Saudara laki-laki kandung (C1)
  if (!presence.A1 && !presence.A5 && !presence.B2 && !presence.B3) {
    result.C1 = "sisa";
  }

  // Aturan untuk Saudara perempuan kandung (C2)
  if (presence.C2 === 1 && !presence.A5 && !presence.A1 && !presence.B1) {
    result.C2 = "1/2";
  } else if (presence.C2 > 1 && !presence.A5 && !presence.A1 && !presence.B1) {
    result.C2 = "2/3";
  }

  // Aturan untuk Saudara laki-laki seayah (C3)
  if (
    !presence.A1 &&
    !presence.A5 &&
    !presence.B2 &&
    !presence.B3 &&
    !presence.C1
  ) {
    result.C3 = "sisa";
  }

  // Aturan untuk Saudara perempuan seayah (C4)
  if (
    !presence.A5 &&
    !presence.A1 &&
    !presence.B1 &&
    !presence.C1 &&
    !presence.C2 &&
    !presence.C3
  ) {
    result.C4 = "1/2";
  } else if (
    presence.C4 > 1 &&
    !presence.A5 &&
    !presence.A1 &&
    !presence.B1 &&
    !presence.C1 &&
    !presence.C2 &&
    !presence.C3
  ) {
    result.C4 = "2/3";
  } else if (
    !presence.A5 &&
    !presence.A1 &&
    !presence.B1 &&
    !presence.C1 &&
    presence.C2 === 1 &&
    !presence.C3
  ) {
    result.C4 = "1/6";
  }

  // Aturan untuk Saudara laki-laki seibu (C5)
  if (
    !presence.A5 &&
    !presence.A6 &&
    !presence.B1 &&
    !presence.B2 &&
    !presence.B3 &&
    !presence.A1 &&
    !presence.C6
  ) {
    result.C5 = "1/6";
  } else if (
    presence.C6 > 1 &&
    !presence.A5 &&
    !presence.A6 &&
    !presence.B1 &&
    !presence.B2 &&
    !presence.B3 &&
    !presence.A1 &&
    presence.C6
  ) {
    result.C5 = "1/3";
  }

  // Aturan untuk Saudara perempuan seibu (C6)
  if (
    !presence.A5 &&
    !presence.A6 &&
    !presence.B1 &&
    !presence.B2 &&
    !presence.B3 &&
    !presence.A1 &&
    !presence.C5
  ) {
    result.C6 = "1/6";
  } else if (
    presence.C6 > 1 &&
    !presence.A5 &&
    !presence.A6 &&
    !presence.B1 &&
    !presence.B2 &&
    !presence.B3 &&
    !presence.A1 &&
    presence.C5
  ) {
    result.C6 = "1/3";
  }

  // Aturan untuk Paman kandung (C7)
  if (
    !presence.A1 &&
    !presence.A5 &&
    !presence.B1 &&
    !presence.B3 &&
    !presence.C1 &&
    !presence.C3
  ) {
    result.C7 = "sisa";
  }

  return result;
};

export default calculateInheritance;
