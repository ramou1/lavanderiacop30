export const SITE_NAME = "Lavanderia COP 30";

export const LOGO_SRC = "/assets/images/logo01.png";

export const INSTAGRAM_URL = "https://www.instagram.com/cop30lavanderia/";

export const WHATSAPP_NUMBER = "5512999999999";

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#produtos", label: "Produtos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
] as const;

export const PRODUCTS = [
  { name: "Desemassa", brand: "Comfort" },
  { name: "Amaciante", brand: "Comfort" },
  { name: "Sabão Líquido", brand: "Omo" },
] as const;

export const MACHINES = [
  { size: "M", quantity: 2 },
  { size: "G", quantity: 1 },
  { size: "GG", quantity: 1, highlight: true },
] as const;

export const CONTACT = {
  phone: "(12) 99999-9999",
  email: "contato@lavanderiacop30.com.br",
  address: "Grand Sky Hotel — São José dos Campos, SP",
  location: "Grand Sky Hotel",
  hours: "Segunda a sábado, 8h às 18h",
} as const;
