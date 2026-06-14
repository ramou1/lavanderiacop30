export const SITE_NAME = "Lavanderia COP 30";

export const SITE_URL = "https://lavanderiacop30.com.br";

export const LOGO_SRC = "/assets/images/logo01.png";

export const INSTAGRAM_URL = "https://www.instagram.com/cop30lavanderia/";

export const WHATSAPP_NUMBER = "5512988767170";

export const DEVELOPER = {
  name: "Ramon Oliveira",
  url: "https://www.linkedin.com/in/ramou1/",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#produtos", label: "Produtos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
] as const;

export const PRODUCTS = [
  { name: "Desamassa", brand: "Comfort" },
  { name: "Amaciante", brand: "Comfort" },
  { name: "Sabão Líquido", brand: "Omo" },
] as const;

export const MACHINES = [
  { size: "M", quantity: 2 },
  { size: "G", quantity: 1 },
  { size: "GG", quantity: 1, highlight: true },
] as const;

export const CONTACT = {
  phone: "(12) 98876-7170",
  email: "contato@lavanderiacop30.com.br",
  address: "Grand Sky Urbanova — São José dos Campos, SP",
  location: "Grand Sky Urbanova",
  street: "Av. Shishima Hifumi, 2828",
  city: "São José dos Campos",
  state: "SP",
  zip: "12244-390",
  country: "BR",
  hours: "Todos os dias das 6h às 22h",
} as const;
