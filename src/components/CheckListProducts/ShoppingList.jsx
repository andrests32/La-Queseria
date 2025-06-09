import { useState, useEffect, useMemo } from "react"
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer"
import {
  UserCheck,
  Download,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  X,
  Check,
  Plus,
  Minus,
} from "lucide-react"
import LogoQueseria from "../LogoQueseria/LogoQueseria"
import HomeButton from "../ProductsFilter/HomeButton"

// Rutas para ilustraciones
const illustrationImages = ["/ilustracionuno.png", "/ilustraciondos.png", "/ilustraciontres.png"]

// Estilos para el PDF
const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: "1 solid #F0F0F0",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 24,
    color: "#F59E0B",
    fontWeight: "bold",
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#1F2937",
    fontWeight: "bold",
  },
  categoryName: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: 5,
    color: "#92400E",
    fontWeight: "bold",
    backgroundColor: "#FEF3C7",
    padding: 5,
    borderRadius: 4,
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    paddingLeft: 10,
  },
  productName: {
    fontSize: 12,
    color: "#4B5563",
  },
  productDetail: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 12,
    color: "#10B981",
    fontWeight: "bold",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingTop: 10,
    borderTop: "1 solid #E5E7EB",
    fontSize: 14,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 30,
    paddingTop: 10,
    borderTop: "1 solid #F0F0F0",
    fontSize: 10,
    color: "#9CA3AF",
    textAlign: "center",
  },
  timestamp: {
    fontSize: 10,
    marginTop: 20,
    color: "#9CA3AF",
    textAlign: "right",
  },
})

// Función para formatear moneda en dólares
const formatCurrency = (amount) => {
  if (amount === undefined || amount === null) return "$0.00"
  const value = typeof amount === 'number' ? amount : parseFloat(amount) || 0
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}

// Función para calcular el precio total del producto (corregida)
const calculateProductPrice = (quantity, price) => {
  const qty = parseFloat(quantity) || 0
  const prc = parseFloat(price) || 0
  const total = qty * prc
  return Math.round(total * 100) / 100 // Redondeo a 2 decimales para evitar errores de punto flotante
}

// Datos iniciales con precios en dólares y unidades fijas (actualizados con precios reales)
const initialCategories = [

  {
    name: "Frutos Secos",
    items: [
      { id: "f1", code: "QNSD1", name: "MANÍ QUEBRADO AL GRANEL 454 GR", detail: "Maní", checked: false, quantity: 0, price: 1.25 },
      { id: "f2", code: "QNSD64", name: "ALMENDRAS 1OOG  GUSTAMAS", detail: "Almendras", checked: false, quantity: 0, price: 1.5 },
      { id: "f3", code: "QNSD74", name: "ARANDANOS 100G GUSTAMAS", detail: "Arándanos", checked: false, quantity: 0, price: 1.25 },
      { id: "f4", code: "QNSD429", name: "MANÍ  MOLIDO  AL GRANEL 454 GR", detail: "Maní", checked: false, quantity: 0, price: 1.25 },
      { id: "f5", code: "QNSD432", name: "MANÍ EN PEPA AL GRANEL 454 GR", detail: "Maní", checked: false, quantity: 0, price: 1.25 },
      { id: "f6", code: "QNSD473", name: "NUEZ  FUNDA 100GR", detail: "Nuez", checked: false, quantity: 0, price: 1.25 },
      { id: "f7", code: "QNSD507", name: "PASAS AL GRANEL", detail: "Pasas", checked: false, quantity: 0, price: 1.25 }
    ]
  },
  {
    name: "Gelatinas",
    items: [
      { id: "f1", code: "QNSD4", name: "GELATINA GELHADA 200GR FRAMBUESA", detail: "Frambuesa", checked: false, quantity: 0, price: 1.45 },
      { id: "f2", code: "QNSD5", name: "GELATINA GELHADA 200GR FRESA", detail: "Fresa", checked: false, quantity: 0, price: 1.45 },
      { id: "f3", code: "QNSD6", name: "GELATINA GELHADA 200GR LIMON", detail: "Limón", checked: false, quantity: 0, price: 1.45 },
      { id: "f4", code: "QNSD7", name: "GELATINA GELHADA 200GR MANZANA", detail: "Manzana", checked: false, quantity: 0, price: 1.45 },
      { id: "f5", code: "QNSD8", name: "GELATINA GELHADA 200GR MORA", detail: "Mora", checked: false, quantity: 0, price: 1.45 },
      { id: "f6", code: "QNSD9", name: "GELATINA GELHADA 200GR NARANJA", detail: "Naranja", checked: false, quantity: 0, price: 1.45 },
      { id: "f7", code: "QNSD10", name: "GELATINA GELHADA 400GR  MANZANA", detail: "Manzana", checked: false, quantity: 0, price: 2.3 },
      { id: "f8", code: "QNSD11", name: "GELATINA GELHADA 400GR CHICLE", detail: "Chicle", checked: false, quantity: 0, price: 2.3 },
      { id: "f9", code: "QNSD12", name: "GELATINA GELHADA 400GR FRUTOS ROJOS", detail: "Frutos Rojos", checked: false, quantity: 0, price: 2.3 },
      { id: "f10", code: "QNSD13", name: "GELATINA GELHADA 400GR MORA", detail: "Mora", checked: false, quantity: 0, price: 2.3 },
      { id: "f11", code: "QNSD314", name: "GELATINA GELHADA  SABOR CEREZA 200GR", detail: "Cereza", checked: false, quantity: 0, price: 1.45 },
      { id: "f12", code: "QNSD315", name: "GELATINA GELHADA  SABOR CEREZA 400GR", detail: "Cereza", checked: false, quantity: 0, price: 2.3 },
      { id: "f13", code: "QNSD316", name: "GELATINA GELHADA  SABOR LIMON 400GR", detail: "Limón", checked: false, quantity: 0, price: 2.3 },
      { id: "f14", code: "QNSD317", name: "GELATINA GELHADA  SABOR PIÑA 400GR", detail: "Piña", checked: false, quantity: 0, price: 2.3 },
      { id: "f15", code: "QNSD318", name: "GELATINA GELHADA CANDY POP 400GR", detail: "Candy Pop", checked: false, quantity: 0, price: 2.3 },
      { id: "f16", code: "QNSD319", name: "GELATINA GELHADA SABOR FRAMBRUESA 400GR", detail: "Frambuesa", checked: false, quantity: 0, price: 2.05 },
      { id: "f17", code: "QNSD320", name: "GELATINA GELHADA SABOR UVA 400GR", detail: "Uva", checked: false, quantity: 0, price: 2.3 },
      { id: "f18", code: "QNSD321", name: "GELATINA GELHADA SORPRESA 400GR", detail: "Sorpresa", checked: false, quantity: 0, price: 1.95 },
      { id: "f19", code: "QNSD322", name: "GELATINA GELHADA SABOR  NARANJA 400GR", detail: "Naranja", checked: false, quantity: 0, price: 2 },
      { id: "f20", code: "QNSD325", name: "GELHADA 200GR PIÑA", detail: "Piña", checked: false, quantity: 0, price: 1.45 },
      { id: "f21", code: "QNSD326", name: "GELHADA 200GR UVA", detail: "Uva", checked: false, quantity: 0, price: 1.45 },
      { id: "f22", code: "QNSD327", name: "GELTINA GELHADA  SABOR FRESA 400GR", detail: "Fresa", checked: false, quantity: 0, price: 2.05 }
    ]
  },
  {
    name: "Arroz",
    items: [
      { id: "f1", code: "QNSD2", name: "ARROZ FLOR", detail: "Flor", checked: false, quantity: 0, price: 9.98 },
      { id: "f2", code: "QNSD19", name: "ARROZ CONEJO", detail: "Conejo", checked: false, quantity: 0, price: 9 },
      { id: "f3", code: "QNSD20", name: "ARROZ MI HACIENDA", detail: "Mi Hacienda", checked: false, quantity: 0, price: 13 },
      { id: "f4", code: "QNSD21", name: "ARROZ WILLIAM", detail: "William", checked: false, quantity: 0, price: 11 },
      { id: "f5", code: "QNSD22", name: "ARROZ MARCELO", detail: "Marcelo", checked: false, quantity: 0, price: 12.5 },
      { id: "f6", code: "QNSD23", name: "ARROZ PRIMICIA", detail: "Primicia", checked: false, quantity: 0, price: 12.95 },
      { id: "f7", code: "QNSD24", name: "GLORIA MATILDE", detail: "Gloria", checked: false, quantity: 0, price: 12.75 },
      { id: "f8", code: "QNSD25", name: "NUESTRA ESMERALDA", detail: "Esmeralda", checked: false, quantity: 0, price: 12.75 },
      { id: "f9", code: "QNSD82", name: "ARROZ  WILLIAM AL GRANEL", detail: "William", checked: false, quantity: 0, price: 0.5 },
      { id: "f10", code: "QNSD84", name: "ARROZ CONEJO 10 LB", detail: "Conejo", checked: false, quantity: 0, price: 4.25 },
      { id: "f11", code: "QNSD85", name: "ARROZ CONEJO AL GRANEL", detail: "Conejo", checked: false, quantity: 0, price: 0.35 },
      { id: "f12", code: "QNSD86", name: "ARROZ ESMERALDAS 10LB", detail: "Esmeraldas", checked: false, quantity: 0, price: 5.6 },
      { id: "f13", code: "QNSD87", name: "ARROZ FLOR 10L", detail: "Flor", checked: false, quantity: 0, price: 4.25 },
      { id: "f14", code: "QNSD88", name: "ARROZ GLORIA  MATILDE 10 LB", detail: "Gloria", checked: false, quantity: 0, price: 5.6 },
      { id: "f15", code: "QNSD89", name: "ARROZ MARCELO AL GRANEL", detail: "Marcelo", checked: false, quantity: 0, price: 0.55 },
      { id: "f16", code: "QNSD90", name: "ARROZ MI HACIENDA 10LB", detail: "Mi Hacienda", checked: false, quantity: 0, price: 5.6 },
      { id: "f17", code: "QNSD91", name: "ARROZ MI HACIENDA AL GRANEL", detail: "Mi Hacienda", checked: false, quantity: 0, price: 0.5 },
      { id: "f18", code: "QNSD92", name: "ARROZ PRIMICIA  10LB", detail: "Primicia", checked: false, quantity: 0, price: 5.6 },
      { id: "f19", code: "QNSD93", name: "ARROZ PRIMICIA AL GRANEL", detail: "Primicia", checked: false, quantity: 0, price: 0.55 },
      { id: "f20", code: "QNSD94", name: "ARROZ SUPER FLOR AL GRANEL", detail: "Super Flor", checked: false, quantity: 0, price: 0.4 },
      { id: "f21", code: "QNSD328", name: "GLORIA MATILDE AL GRANEL", detail: "Gloria", checked: false, quantity: 0, price: 0.55 },
      { id: "f22", code: "QNSD329", name: "GLORIA MATILDE QUINTAL", detail: "Gloria", checked: false, quantity: 0, price: 52 },
      { id: "f23", code: "QNSD556", name: "QUINTAL ARROZ FLOR NUEVO", detail: "Flor", checked: false, quantity: 0, price: 35.5 },
      { id: "f24", code: "QNSD557", name: "QUINTAL MI HACIENDA", detail: "Mi Hacienda", checked: false, quantity: 0, price: 52 },
      { id: "f25", code: "QNSD558", name: "QUINTAL WILLIAM", detail: "William", checked: false, quantity: 0, price: 43 }
    ]
  },
  {
    name: "Aceites",
    items: [
      { id: "f1", code: "QNSD26", name: "ACEITE ALESOL BOTELLA  900ML", detail: "Alesol", checked: false, quantity: 0, price: 2.15 },
      { id: "f2", code: "QNSD27", name: "ACEITE ALESOL FUNDA 900ML", detail: "Alesol", checked: false, quantity: 0, price: 1.75 },
      { id: "f3", code: "QNSD28", name: "ACEITE EL COLORADO 900ML", detail: "Colorado", checked: false, quantity: 0, price: 1.49 },
      { id: "f4", code: "QNSD29", name: "ACEITE GIRASOL  1LT BOTELLA FABRIL", detail: "Girasol", checked: false, quantity: 0, price: 2.75 },
      { id: "f5", code: "QNSD30", name: "ACEITE GIRASOL 1LT BOTELLA FRAILE", detail: "Girasol", checked: false, quantity: 0, price: 2.7 },
      { id: "f6", code: "QNSD31", name: "ACEITE GIRASOL 250 ML BOTELLA", detail: "Girasol", checked: false, quantity: 0, price: 0.85 },
      { id: "f7", code: "QNSD32", name: "ACEITE JOYASOL FUNDA  1LT", detail: "Joyasol", checked: false, quantity: 0, price: 1.75 },
      { id: "f8", code: "QNSD33", name: "ACEITE PALMA DE ORO  FUNDA 1LT", detail: "Palma", checked: false, quantity: 0, price: 1.95 },
      { id: "f9", code: "QNSD34", name: "ACEITE PALMA DE ORO 390ML BOTELLA", detail: "Palma", checked: false, quantity: 0, price: 0.9 },
      { id: "f10", code: "QNSD35", name: "ACEITE PALMA DE ORO 900ML BOTELLA", detail: "Palma", checked: false, quantity: 0, price: 2.42 },
      { id: "f11", code: "QNSD36", name: "ACEITE PALMA DE ORO BOTTELA 750ML", detail: "Palma", checked: false, quantity: 0, price: 1.75 },
      { id: "f12", code: "QNSD37", name: "ACEITE PALMA DE ORO FUNDA  112ML", detail: "Palma", checked: false, quantity: 0, price: 0.25 },
      { id: "f13", code: "QNSD38", name: "ACEITE PALMA DE ORO FUNDA  210ML", detail: "Palma", checked: false, quantity: 0, price: 0.5 },
      { id: "f14", code: "QNSD39", name: "ACEITE PALMA DE ORO FUNDA  480ML", detail: "Palma", checked: false, quantity: 0, price: 1 },
      { id: "f15", code: "QNSD40", name: "ACEITE PALMA DE ORO FUNDA  840ML", detail: "Palma", checked: false, quantity: 0, price: 1.75 },
      { id: "f16", code: "QNSD41", name: "ACEITE SABOR CASERO  1LT", detail: "Casero", checked: false, quantity: 0, price: 1.65 },
      { id: "f17", code: "QNSD42", name: "ACEITE SUPER 1LT", detail: "Super", checked: false, quantity: 0, price: 1.75 },
      { id: "f18", code: "QNSD43", name: "ACEITE TRIREFINADO 900ML FUNDA", detail: "Trirefinado", checked: false, quantity: 0, price: 1.99 },
      { id: "f19", code: "QNSD44", name: "ACEITE VIVI CANOLA 1TL BOTELLA", detail: "Canola", checked: false, quantity: 0, price: 2.65 },
      { id: "f20", code: "QNSD680", name: "TRIREFINADO 5LT", detail: "Trirefinado", checked: false, quantity: 0, price: 11.5 }
    ]
  },
  {
    name: "Bebidas",
    items: [
      { id: "f1", code: "QNSD51", name: "AGUA DASANI  600ML", detail: "Dasani", checked: false, quantity: 0, price: 0.5 },
      { id: "f2", code: "QNSD52", name: "AGUA DASANI 1.2L", detail: "Dasani", checked: false, quantity: 0, price: 0.75 },
      { id: "f3", code: "QNSD53", name: "AGUA DASANI 3.8L", detail: "Dasani", checked: false, quantity: 0, price: 1.5 },
      { id: "f4", code: "QNSD54", name: "AGUA DASANI MINERALIZADA 500ML", detail: "Dasani", checked: false, quantity: 0, price: 0.5 },
      { id: "f5", code: "QNSD55", name: "AGUA DASANI SIN GAS 6.05 LT", detail: "Dasani", checked: false, quantity: 0, price: 1.5 },
      { id: "f6", code: "QNSD56", name: "AGUA DE COCO", detail: "Coco", checked: false, quantity: 0, price: 1.5 },
      { id: "f7", code: "QNSD57", name: "AGUA MINERALIZA MANA 500ML", detail: "Mana", checked: false, quantity: 0, price: 0.35 },
      { id: "f8", code: "QNSD58", name: "AGUA MINERALIZADA  MANA 1LT", detail: "Mana", checked: false, quantity: 0, price: 0.5 },
      { id: "f9", code: "QNSD75", name: "AROMATEL  FRUTOS ROJOS 340ML", detail: "Frutos Rojos", checked: false, quantity: 0, price: 0.75 },
      { id: "f10", code: "QNSD77", name: "AROMATEL COCO BAMBU 340ML", detail: "Coco Bambú", checked: false, quantity: 0, price: 1 },
      { id: "f11", code: "QNSD78", name: "AROMATEL FLORAL 340ML", detail: "Floral", checked: false, quantity: 0, price: 0.75 },
      { id: "f12", code: "QNSD79", name: "AROMATEL FRUTOS ROJOS  900ML", detail: "Frutos Rojos", checked: false, quantity: 0, price: 2.75 },
      { id: "f13", code: "QNSD175", name: "CHOCOLATADA  LENUTRIT EN FUNDA 200ML", detail: "Lenutrit", checked: false, quantity: 0, price: 0.45 },
      { id: "f14", code: "QNSD176", name: "CHOCOLATADA  LENUTRIT EN FUNDA 900ML", detail: "Lenutrit", checked: false, quantity: 0, price: 1.25 },
      { id: "f15", code: "QNSD177", name: "CHOCOLATADA BEBIDA TONI 200ML", detail: "Toni", checked: false, quantity: 0, price: 1 },
      { id: "f16", code: "QNSD201", name: "COCA COLA 3LT", detail: "Coca Cola", checked: false, quantity: 0, price: 3 },
      { id: "f17", code: "QNSD202", name: "COCA COLA 500ML", detail: "Coca Cola", checked: false, quantity: 0, price: 0.75 },
      { id: "f18", code: "QNSD203", name: "COCA COLA SABOR ORGINAL 1L", detail: "Coca Cola", checked: false, quantity: 0, price: 1.1 },
      { id: "f19", code: "QNSD204", name: "COCACOLA  300ML", detail: "Coca Cola", checked: false, quantity: 0, price: 0.5 },
      { id: "f20", code: "QNSD245", name: "DEL VALLE DURAZNO 250 ML", detail: "Durazno", checked: false, quantity: 0, price: 0.4 },
      { id: "f21", code: "QNSD275", name: "FANTA  NARANJA 1.35L", detail: "Naranja", checked: false, quantity: 0, price: 1.15 },
      { id: "f22", code: "QNSD276", name: "FANTA 3LT", detail: "Fanta", checked: false, quantity: 0, price: 3 },
      { id: "f23", code: "QNSD277", name: "FANTA NARANJA 500ML", detail: "Naranja", checked: false, quantity: 0, price: 0.5 },
      { id: "f24", code: "QNSD294", name: "FIORA 3LT", detail: "Fiora", checked: false, quantity: 0, price: 3 },
      { id: "f25", code: "QNSD295", name: "FIORA VANTI 500ML", detail: "Vanti", checked: false, quantity: 0, price: 0.5 },
      { id: "f26", code: "QNSD296", name: "FIORA VANTI FRESA 1.35L", detail: "Fresa", checked: false, quantity: 0, price: 1.15 },
      { id: "f27", code: "QNSD303", name: "FRESA BEBIDA TONI 200ML", detail: "Fresa", checked: false, quantity: 0, price: 1 },
      { id: "f28", code: "QNSD304", name: "FRUSH AVENA  CANELA  1000ML TONI TETRACK", detail: "Avena Canela", checked: false, quantity: 0, price: 2.5 },
      { id: "f29", code: "QNSD305", name: "FRUSH AVENA NARANJILLA MARACUYA 200ML", detail: "Naranjilla", checked: false, quantity: 0, price: 0.5 },
      { id: "f30", code: "QNSD309", name: "FURY ENERGY 500ML", detail: "Fury", checked: false, quantity: 0, price: 0.85 },
      { id: "f31", code: "QNSD310", name: "FUZETEA TE NEGRO SABOR LIMON 1L", detail: "Limón", checked: false, quantity: 0, price: 1.25 },
      { id: "f32", code: "QNSD311", name: "FUZETEA TE NEGRO SABOR LIMON 550 ML", detail: "Limón", checked: false, quantity: 0, price: 0.75 },
      { id: "f33", code: "QNSD365", name: "INCA KOLA 1L", detail: "Inca Kola", checked: false, quantity: 0, price: 0.75 },
      { id: "f34", code: "QNSD366", name: "INKA COLA 500ML", detail: "Inka Cola", checked: false, quantity: 0, price: 0.4 },
      { id: "f35", code: "QNSD526", name: "POWER DE 1LT", detail: "Power", checked: false, quantity: 0, price: 1 },
      { id: "f36", code: "QNSD621", name: "SPRITE FRESA 3L", detail: "Fresa", checked: false, quantity: 0, price: 3 },
      { id: "f37", code: "QNSD622", name: "SPRITE SABOR A LIMON 1.35L", detail: "Limón", checked: false, quantity: 0, price: 1.01 },
      { id: "f38", code: "QNSD623", name: "SPRITE SABOR A LIMON 500ML", detail: "Limón", checked: false, quantity: 0, price: 0.5 }
    ]
  },
  {
    name: "Lácteos",
    items: [
      { id: "f1", code: "QNSD219", name: "CREMA DE LECHE  ORDEÑO 1LT", detail: "Crema", checked: false, quantity: 0, price: 3.6 },
      { id: "f2", code: "QNSD220", name: "CREMA DE LECHE LENUTRIT  EN FUNDA 200 ML", detail: "Lenutrit", checked: false, quantity: 0, price: 1 },
      { id: "f3", code: "QNSD221", name: "CREMA DE LECHE PARMALAT EN FUNDA 200ML", detail: "Parmalat", checked: false, quantity: 0, price: 1.25 },
      { id: "f4", code: "QNSD222", name: "CREMA DE LECHE TRU 250ML", detail: "Tru", checked: false, quantity: 0, price: 1.45 },
      { id: "f5", code: "QNSD395", name: "LA SABROSA MARGARINA  420GR", detail: "Margarina", checked: false, quantity: 0, price: 0.85 },
      { id: "f6", code: "QNSD403", name: "LECHE  ORDEÑO 1LT FUNDA", detail: "Ordeño", checked: false, quantity: 0, price: 0.9 },
      { id: "f7", code: "QNSD404", name: "LECHE AL GRANEL PRODUCCION LITRO", detail: "Leche", checked: false, quantity: 0, price: 0.52 },
      { id: "f8", code: "QNSD405", name: "LECHE CONDENSADA  LA LECHERA 100GR", detail: "Lechera", checked: false, quantity: 0, price: 0.98 },
      { id: "f9", code: "QNSD406", name: "LECHE CONDENSADA LA LECHERA 393GR", detail: "Lechera", checked: false, quantity: 0, price: 2.15 },
      { id: "f10", code: "QNSD407", name: "LECHE HERVIDA ENTERA AL GRANEL", detail: "Leche", checked: false, quantity: 0, price: 0.75 },
      { id: "f11", code: "QNSD408", name: "LECHE PARMALAT 200ML", detail: "Parmalat", checked: false, quantity: 0, price: 0.25 },
      { id: "f12", code: "QNSD409", name: "LECHE TONI SEMIDESCREAMADA FRUTILLA  200 ML", detail: "Frutilla", checked: false, quantity: 0, price: 1 },
      { id: "f13", code: "QNSD410", name: "LECHE TONI SEMIDESCREMADA FRUTILLA 135ML", detail: "Frutilla", checked: false, quantity: 0, price: 0.6 },
      { id: "f14", code: "QNSD411", name: "LECHE VAQUITA EN POLVO 190GR", detail: "Vaquita", checked: false, quantity: 0, price: 1.69 },
      { id: "f15", code: "QNSD412", name: "LECHE VAQUITA EN POLVO 31GR", detail: "Vaquita", checked: false, quantity: 0, price: 0.35 },
      { id: "f16", code: "QNSD413", name: "LECHE VAQUITA EN POLVO 90GR", detail: "Vaquita", checked: false, quantity: 0, price: 0.95 },
      { id: "f17", code: "QNSD416", name: "LENUTRIT YOGURT FRUTILLA FUNDA 750G", detail: "Frutilla", checked: false, quantity: 0, price: 1 },
      { id: "f18", code: "QNSD417", name: "LENUTRIT YOGURT MORA FUNDA 750G", detail: "Mora", checked: false, quantity: 0, price: 1 },
      { id: "f19", code: "QNSD420", name: "LINDA LECHE ENTERA  EN FUNDA 1LT", detail: "Linda", checked: false, quantity: 0, price: 0.75 },
      { id: "f20", code: "QNSD444", name: "MANTECA LOS 3 CHANCHITOS", detail: "Manteca", checked: false, quantity: 0, price: 2.37 },
      { id: "f21", code: "QNSD445", name: "MANTECA TRES CHANCHITOS 453GR", detail: "Manteca", checked: false, quantity: 0, price: 1 },
      { id: "f22", code: "QNSD446", name: "MANTEQUILLA GIRASOL 240G", detail: "Girasol", checked: false, quantity: 0, price: 1.1 },
      { id: "f23", code: "QNSD447", name: "MANTEQUILLA MANABA", detail: "Manaba", checked: false, quantity: 0, price: 1.5 },
      { id: "f24", code: "QNSD448", name: "MAYONESA  250G FRAILE", detail: "Mayonesa", checked: false, quantity: 0, price: 1 },
      { id: "f25", code: "QNSD449", name: "MAYONESA MAGGI 30GR", detail: "Maggi", checked: false, quantity: 0, price: 0.35 },
      { id: "f26", code: "QNSD504", name: "PARMALAT DESCREMADA FUNDA 900 ML", detail: "Parmalat", checked: false, quantity: 0, price: 1.1 },
      { id: "f27", code: "QNSD505", name: "PARMALAT DESLACTOSADA FUNDA 900 ML", detail: "Parmalat", checked: false, quantity: 0, price: 1.1 },
      { id: "f28", code: "QNSD506", name: "PARMALAT ENTERA EN FUNDA 900 ML", detail: "Parmalat", checked: false, quantity: 0, price: 0.95 },
      { id: "f29", code: "QNSD533", name: "PRODULECHE ENTERA EN FUNDA 1/2", detail: "Produleche", checked: false, quantity: 0, price: 0.4 },
      { id: "f30", code: "QNSD534", name: "PRODULECHE ENTERA EN FUNDA 1/4", detail: "Produleche", checked: false, quantity: 0, price: 0.25 },
      { id: "f31", code: "QNSD535", name: "PRODULECHE ENTERA EN FUNDA 1LT", detail: "Produleche", checked: false, quantity: 0, price: 0.7 },
      { id: "f32", code: "QNSD537", name: "QUESO CHEDDAR FUNDIDO 500GR", detail: "Cheddar", checked: false, quantity: 0, price: 3 },
      { id: "f33", code: "QNSD538", name: "QUESO CHEDDAR LAMINADO AL GRANEL", detail: "Cheddar", checked: false, quantity: 0, price: 2.85 },
      { id: "f34", code: "QNSD539", name: "QUESO CHICLOSO AL GRANEL", detail: "Chicloso", checked: false, quantity: 0, price: 2.4 },
      { id: "f35", code: "QNSD540", name: "QUESO CREMA 250GR  TONI", detail: "Queso", checked: false, quantity: 0, price: 2.5 },
      { id: "f36", code: "QNSD541", name: "QUESO CREMA 50 G TONI", detail: "Queso", checked: false, quantity: 0, price: 0.75 },
      { id: "f37", code: "QNSD542", name: "QUESO CREMA TONI 100GR", detail: "Queso", checked: false, quantity: 0, price: 1.25 },
      { id: "f38", code: "QNSD543", name: "QUESO CREMA TONI DE 50G", detail: "Queso", checked: false, quantity: 0, price: 0.5 },
      { id: "f39", code: "QNSD544", name: "QUESO DE FABRICA SEMIDURO", detail: "Queso", checked: false, quantity: 0, price: 2 },
      { id: "f40", code: "QNSD546", name: "QUESO DE FINCA AL GRANEL", detail: "Queso", checked: false, quantity: 0, price: 2.6 },
      { id: "f41", code: "QNSD547", name: "QUESO DE FINCA AL VACÍO 250 GR", detail: "Queso", checked: false, quantity: 0, price: 1.75 },
      { id: "f42", code: "QNSD549", name: "QUESO DE MESA AL GRANEL", detail: "Queso", checked: false, quantity: 0, price: 1.85 },
      { id: "f43", code: "QNSD550", name: "QUESO DE MESA PR.", detail: "Queso", checked: false, quantity: 0, price: 1.47 },
      { id: "f44", code: "QNSD551", name: "QUESO DESCREMADO AL GRANEL", detail: "Queso", checked: false, quantity: 0, price: 0.75 },
      { id: "f45", code: "QNSD553", name: "QUESO MOZARELLA ENTERO AL GRANEL", detail: "Mozarella", checked: false, quantity: 0, price: 2.65 },
      { id: "f46", code: "QNSD554", name: "QUESO MOZARELLA LAMINADO AL GRANEL", detail: "Mozarella", checked: false, quantity: 0, price: 2.85 },
      { id: "f47", code: "QNSD561", name: "RANCHITO  LECHE ENTERA  FUNDA 1LT", detail: "Ranchito", checked: false, quantity: 0, price: 0.9 },
      { id: "f48", code: "QNSD562", name: "RANCHITO LECHE ENTERA FUNDA 1/2", detail: "Ranchito", checked: false, quantity: 0, price: 0.45 },
      { id: "f49", code: "QNSD563", name: "RANCHITO LECHE ENTERA FUNDA 1/4", detail: "Ranchito", checked: false, quantity: 0, price: 0.25 },
      { id: "f50", code: "QNSD576", name: "REYLECHE  DESCREMADA 1LT TETRAPPACK", detail: "Reyleche", checked: false, quantity: 0, price: 1.45 },
      { id: "f51", code: "QNSD577", name: "REYLECHE 1LT TETRAPACK", detail: "Reyleche", checked: false, quantity: 0, price: 1.2 },
      { id: "f52", code: "QNSD578", name: "REYLECHE DESLACTOSADA 1LT TETRACK", detail: "Reyleche", checked: false, quantity: 0, price: 1.65 },
      { id: "f53", code: "QNSD579", name: "REYLECHE DESLACTOSADA FUNDA 900 ML", detail: "Reyleche", checked: false, quantity: 0, price: 1.1 },
      { id: "f54", code: "QNSD580", name: "REYLECHE ENTERA FUNDA 200 ML", detail: "Reyleche", checked: false, quantity: 0, price: 0.25 },
      { id: "f55", code: "QNSD581", name: "REYLECHE ENTERA FUNDA 450 ML", detail: "Reyleche", checked: false, quantity: 0, price: 0.5 },
      { id: "f56", code: "QNSD582", name: "REYLECHE ENTERA REYEN FUNDA 900 ML", detail: "Reyleche", checked: false, quantity: 0, price: 1 },
      { id: "f57", code: "QNSD583", name: "REYLECHE SEMIDESCREMADA FUNDA 900ML", detail: "Reyleche", checked: false, quantity: 0, price: 1.1 },
      { id: "f58", code: "QNSD667", code: "QNSD668", name: "TONI LECHE   SEMIDESCREMADA 1LT TETRACK", detail: "Toni", checked: false, quantity: 0, price: 1.8 },
      { id: "f59", code: "QNSD669", name: "TONI LECHE CARTON ENTERA 1LT", detail: "Toni", checked: false, quantity: 0, price: 1.6 },
      { id: "f60", code: "QNSD681", name: "TRU ENTERA CARTON 1LT", detail: "Tru", checked: false, quantity: 0, price: 1.1 },
      { id: "f61", code: "QNSD682", name: "ULTRA LECHE ENTERA EN FUNDA 900ML", detail: "Ultra", checked: false, quantity: 0, price: 0.7 }
    ]
  },
  {
    name: "Yogures",
    items: [
      { id: "f1", code: "QNSD306", name: "FRUSH YOGURTH FRUTILLA 900GR TONI", detail: "Frutilla", checked: false, quantity: 0, price: 1.5 },
      { id: "f2", code: "QNSD416", name: "LENUTRIT YOGURT FRUTILLA FUNDA 750G", detail: "Frutilla", checked: false, quantity: 0, price: 1 },
      { id: "f3", code: "QNSD417", name: "LENUTRIT YOGURT MORA FUNDA 750G", detail: "Mora", checked: false, quantity: 0, price: 1 },
      { id: "f4", code: "QNSD564", name: "RANCHITO YOGURTH FRUTILLA 900GR", detail: "Frutilla", checked: false, quantity: 0, price: 0.95 },
      { id: "f5", code: "QNSD565", name: "RANCHITO YOGURTH MORA 900GR", detail: "Mora", checked: false, quantity: 0, price: 0.95 },
      { id: "f6", code: "QNSD688", name: "YOGURT CLASICO FRUTILLA 190G", detail: "Frutilla", checked: false, quantity: 0, price: 1 },
      { id: "f7", code: "QNSD689", name: "YOGURT GRIEGO  NATURAL 150G", detail: "Natural", checked: false, quantity: 0, price: 1.75 },
      { id: "f8", code: "QNSD690", name: "YOGURTH  NATURAL BOTELLA TONI 950GR", detail: "Natural", checked: false, quantity: 0, price: 3.5 },
      { id: "f9", code: "QNSD692", name: "YOGURTH (POMO) MIX SABORES 1LT", detail: "Mix", checked: false, quantity: 0, price: 1.5 },
      { id: "f10", code: "QNSD693", name: "YOGURTH (POMO) MIX SABORES 4LT", detail: "Mix", checked: false, quantity: 0, price: 4.5 },
      { id: "f11", code: "QNSD694", name: "YOGURTH (POMO) MIX SABORES 500ML", detail: "Mix", checked: false, quantity: 0, price: 1 },
      { id: "f12", code: "QNSD695", name: "YOGURTH (POMO) MIXSABORES 2LT", detail: "Mix", checked: false, quantity: 0, price: 2.5 },
      { id: "f13", code: "QNSD696", name: "YOGURTH CLASICO 110G TONI", detail: "Clásico", checked: false, quantity: 0, price: 0.5 },
      { id: "f14", code: "QNSD697", name: "YOGURTH GRIEGO 150GR TONI", detail: "Griego", checked: false, quantity: 0, price: 1.75 },
      { id: "f15", code: "QNSD698", name: "YOGURTH GRIEGO FRUTILLA 150GR", detail: "Frutilla", checked: false, quantity: 0, price: 1.75 },
      { id: "f16", code: "QNSD699", name: "YOGURTH GRIEGO MANGO 150GR", detail: "Mango", checked: false, quantity: 0, price: 1.75 },
      { id: "f17", code: "QNSD700", name: "YOGURTH MIX FRUTI BOLITAS 180GR", detail: "Frutibolitas", checked: false, quantity: 0, price: 1 },
      { id: "f18", code: "QNSD701", name: "YOGURTH MIX VAINI BOLITAS 180GR", detail: "Vainibolitas", checked: false, quantity: 0, price: 1 },
      { id: "f19", code: "QNSD702", name: "YOGURTH PARAISO COCO  FUNDA   900G", detail: "Coco", checked: false, quantity: 0, price: 1 },
      { id: "f20", code: "QNSD703", name: "YOGURTH PARAISO DURAZNO  FUNDA 900G", detail: "Durazno", checked: false, quantity: 0, price: 1 },
      { id: "f21", code: "QNSD704", name: "YOGURTH PARAISO FUNDA 900 g", detail: "Paraíso", checked: false, quantity: 0, price: 1 },
      { id: "f22", code: "QNSD705", name: "YOGURTH PARAISO GUANABANA 900G", detail: "Guanábana", checked: false, quantity: 0, price: 1 },
      { id: "f23", code: "QNSD706", name: "YOGURTH PARAISO MORA 900G", detail: "Mora", checked: false, quantity: 0, price: 1 },
      { id: "f24", code: "QNSD708", name: "YOGURTH TONI BEBIBLE 750G", detail: "Bebible", checked: false, quantity: 0, price: 1.7 }
    ]
  },
  {
    name: "Café e Infusiones",
    items: [
      { id: "f1", code: "QNSD15", name: "ILE TE HIERBALUISA CAJA 37.5GR", detail: "Hierbaluisa", checked: false, quantity: 0, price: 0.95 },
      { id: "f2", code: "QNSD129", name: "BUENDIA CAFE FRASCO 170G", detail: "Buendía", checked: false, quantity: 0, price: 8.6 },
      { id: "f3", code: "QNSD130", name: "BUENDIA CAFE FRASCO 50G", detail: "Buendía", checked: false, quantity: 0, price: 3.3 },
      { id: "f4", code: "QNSD131", name: "BUENDIA CAFE FRASCO 85G", detail: "Buendía", checked: false, quantity: 0, price: 5.4 },
      { id: "f5", code: "QNSD132", name: "CAFE  MOLIDO LOESX DE 200G", detail: "Loesx", checked: false, quantity: 0, price: 2.5 },
      { id: "f6", code: "QNSD133", name: "CAFÉ BUEN DIA 10G", detail: "Buen Día", checked: false, quantity: 0, price: 0.5 },
      { id: "f7", code: "QNSD134", name: "CAFE BUENDIA 20GR", detail: "Buendía", checked: false, quantity: 0, price: 1 },
      { id: "f8", code: "QNSD135", name: "CAFE CAYETANO 100GR", detail: "Cayetano", checked: false, quantity: 0, price: 2.5 },
      { id: "f9", code: "QNSD136", name: "CAFE CAYETANO 50GR", detail: "Cayetano", checked: false, quantity: 0, price: 1.5 },
      { id: "f10", code: "QNSD137", name: "CAFÉ DE PASAR GAPRÉ 454 GR", detail: "Gapré", checked: false, quantity: 0, price: 3.25 },
      { id: "f11", code: "QNSD138", name: "CAFÉ DE PASAR GAPRÉ AL GRANEL 454 GR", detail: "Gapré", checked: false, quantity: 0, price: 4.75 },
      { id: "f12", code: "QNSD139", name: "CAFE LABRADOR 200G", detail: "Labrador", checked: false, quantity: 0, price: 2.5 },
      { id: "f13", code: "QNSD140", name: "CAFE LABRADOR 450G", detail: "Labrador", checked: false, quantity: 0, price: 5 },
      { id: "f14", code: "QNSD141", name: "CAFE MOLIDO LOEX 450G", detail: "Loex", checked: false, quantity: 0, price: 6 },
      { id: "f15", code: "QNSD142", name: "CAFE ORO  40GR", detail: "Oro", checked: false, quantity: 0, price: 1.78 },
      { id: "f16", code: "QNSD143", name: "CAFE ORO 20G", detail: "Oro", checked: false, quantity: 0, price: 1 },
      { id: "f17", code: "QNSD144", name: "CAFE ORO 45G", detail: "Oro", checked: false, quantity: 0, price: 1.95 },
      { id: "f18", code: "QNSD145", name: "CAFE ORO SOLUBLE  FRASCO 50G", detail: "Oro", checked: false, quantity: 0, price: 3.38 },
      { id: "f19", code: "QNSD146", name: "CAFE ORO SOLUBLE FRASCO 85G", detail: "Oro", checked: false, quantity: 0, price: 4.89 },
      { id: "f20", code: "QNSD147", name: "CAFE PRES2  50g", detail: "Pres2", checked: false, quantity: 0, price: 1.25 },
      { id: "f21", code: "QNSD148", name: "CAFFE LATO  250GR TONI CAPUCCINO TETRACK", detail: "Cappuccino", checked: false, quantity: 0, price: 1 },
      { id: "f22", code: "QNSD149", name: "CAFFE LATO CAPUCCINO 285ML TONI", detail: "Cappuccino", checked: false, quantity: 0, price: 2 },
      { id: "f23", code: "QNSD150", name: "CAFFE LATO DOBLE ESPRESSO 285ML", detail: "Espresso", checked: false, quantity: 0, price: 2 },
      { id: "f24", code: "QNSD151", name: "CAFFE LATO MOCACCINO 285ML TONI", detail: "Mocaccino", checked: false, quantity: 0, price: 2 },
      { id: "f25", code: "QNSD152", name: "CAFFE MOCCACCINO TONI 250G TETRACK", detail: "Moccaccino", checked: false, quantity: 0, price: 1 },
      { id: "f26", code: "QNSD482", name: "ORO CAFE SOLUBLE LIOFILIZADO SOBRE 23G", detail: "Oro", checked: false, quantity: 0, price: 1.1 },
      { id: "f27", code: "QNSD676", name: "TOSCANA CAFE INSTANTANEO 45G", detail: "Toscana", checked: false, quantity: 0, price: 1.25 }
    ]
  }
]

// Componente PDF actualizado
const MyDocument = ({ selectedProducts, totalPrice }) => {
  const formatDate = () => {
    const now = new Date()
    return now.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.header}>
          <View style={pdfStyles.logoContainer}>
            <Text style={pdfStyles.logoText}>Quesería</Text>
          </View>
        </View>

        <Text style={pdfStyles.title}>Lista de Compras</Text>

        {selectedProducts.map((category) => (
          <View key={category.name}>
            <Text style={pdfStyles.categoryName}>{category.name}</Text>
            {category.items.map((item) => {
              const itemPrice = calculateProductPrice(item.quantity, item.price)
              return (
                <View key={`${category.name}-${item.name}`} style={pdfStyles.productRow}>
                  <Text style={pdfStyles.productName}>Code: {item.code}</Text>
                  <Text style={pdfStyles.productName}>{item.name}</Text>
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Text style={pdfStyles.productDetail}>
                      cant: {item.quantity} {item.unit}
                    </Text>
                    <Text style={pdfStyles.productPrice}>
                      {formatCurrency(itemPrice)}
                    </Text>
                  </View>
                </View>
              )
            })}
          </View>
        ))}

        <View style={pdfStyles.totalRow}>
          <Text>Total:</Text>
          <Text>{formatCurrency(totalPrice)}</Text>
        </View>

        <Text style={pdfStyles.timestamp}>Generado el: {formatDate()}</Text>

        <Text style={pdfStyles.footer}>
          Gracias por comprar en Quesería - La mejor selección de productos.
        </Text>
      </Page>
    </Document>
  )
}

// Componente para mostrar el PDF
const PDFViewer = ({ shoppingListData, totalPrice, onClose }) => {
  const [pdfUrl, setPdfUrl] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const generatePdf = async () => {
      try {
        if (!shoppingListData || shoppingListData.length === 0) {
          throw new Error("No hay datos para generar el PDF")
        }

        const blob = await pdf(<MyDocument selectedProducts={shoppingListData} totalPrice={totalPrice} />).toBlob()
        const url = URL.createObjectURL(blob)
        setPdfUrl(url)
        setError(null)
      } catch (err) {
        console.error("Error generating PDF:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    generatePdf()

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl)
      }
    }
  }, [shoppingListData, totalPrice])

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full mx-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-amber-500 mx-auto mb-6"></div>
            <h3 className="text-xl font-medium text-gray-900">Generando PDF...</h3>
            <p className="mt-3 text-gray-500">Por favor espera un momento.</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full mx-4">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-red-100 mb-6">
              <X className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">Error al generar PDF</h3>
            <p className="mt-3 text-red-500">{error}</p>
            <button
              onClick={onClose}
              className="mt-6 w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      <div className="bg-chedar p-4 flex justify-between items-center shadow-sm">
        <h2 className="text-2xl font-play text-verde">Lista de Compras</h2>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-amber-100 transition-colors" aria-label="Cerrar">
          <X className="h-6 w-6 text-verde" />
        </button>
      </div>

      {isMobile ? (
        <div className="flex-1 overflow-auto p-4 flex flex-col items-center justify-center">
          <div className="text-center mb-6">
            <div className="mx-auto w-16 h-16 bg-verde rounded-full flex items-center justify-center mb-4">
              <Download className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-play text-verde tracking-wide mb-2">Lista de compras generada</h3>
            <p className="text-chedar font-avenir">Descarga el PDF para ver tu lista de compras</p>
          </div>
          <a
            href={pdfUrl}
            download="lista_compras.pdf"
            className="px-6 py-3 bg-chedar hover:bg-amber-600 text-white rounded-lg font-avenir transition-colors flex items-center shadow-md"
          >
            <Download className="h-5 w-5 mr-2" />
            Descargar PDF
          </a>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-hidden">
            <iframe src={pdfUrl} className="w-full h-full border-0" title="Lista de Compras PDF" />
          </div>

          <div className="bg-amber-50 p-4 border-t shadow-inner flex justify-end">
            <a
              href={pdfUrl}
              download="lista_compras.pdf"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors flex items-center shadow-md"
            >
              <Download className="h-5 w-5 mr-2" />
              Descargar PDF
            </a>
          </div>
        </>
      )}
    </div>
  )
}

// Componente ProductItem mejorado
const ProductItem = ({ item, onChange, onQuantityChange }) => {
  const calculateItemPrice = () => {
    const quantity = parseFloat(item.quantity) || 0
    const price = parseFloat(item.price) || 0
    const total = quantity * price
    return Math.round(total * 100) / 100 // Redondeo a 2 decimales
  }

  return (
    <div
      className={`flex flex-col p-4 rounded-xl border-2 transition-all ${item.checked ? "bg-amber-50 border-chedar/70 shadow-md" : "bg-white border-gray-200 hover:border-amber-200"
        }`}
    >
      <div className="flex items-start mb-2">
        <div
          className={`flex items-center justify-center w-6 h-6 rounded-full border-2 cursor-pointer mt-1 ${item.checked ? "bg-chedar border-amber-500" : "border-gray-300"
            }`}
          onClick={onChange}
        >
          {item.checked && <Check className="h-4 w-4 text-white" />}
        </div>

        <div className="ml-3 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <span className={`block font-play text-lg tracking-wide ${item.checked ? "text-verde" : "text-gray-800"}`}>
                {item.name}
              </span>
              <span className={`block text-sm ${item.checked ? "text-rock" : "text-gray-500"}`}>
                {item.detail}
              </span>
            </div>

            {/* Precio unitario siempre visible */}
            <span className="text-sm font-medium text-emerald-600 ml-2">
              {formatCurrency(item.price)}
            </span>
          </div>

          {/* Total solo visible cuando está seleccionado y cantidad > 0 */}
          {item.checked && item.quantity > 0 && (
            <div className="mt-2 bg-amber-100 px-3 py-1 rounded-lg inline-block">
              <span className="text-sm font-medium text-amber-800">
                Total: {formatCurrency(calculateItemPrice())}
              </span>
            </div>
          )}
        </div>
      </div>

      {item.checked && (
        <div className="mt-3">
          <label className="block text-xs text-rock mb-1 font-medium">Cantidad</label>
          <div className="flex items-center">
            <button
              onClick={() => onQuantityChange(Math.max(0, Number(item.quantity || 0) - 1))}
              className="h-9 w-9 flex items-center justify-center bg-chedar text-white rounded-l-lg border border-amber-200 hover:bg-amber-200 transition-colors"
              aria-label="Disminuir cantidad"
            >
              <Minus className="h-4 w-4" />
            </button>
            <input
              type="number"
              min="0"
              value={item.quantity || 0}
              onChange={(e) => onQuantityChange(e.target.value)}
              className="h-9 w-16 text-center border-y border-amber-200 focus:outline-none focus:ring-1 focus:ring-amber-500 text-verde bg-white"
            />
            <button
              onClick={() => onQuantityChange(Number(item.quantity || 0) + 1)}
              className="h-9 w-9 flex items-center justify-center bg-chedar text-white rounded-r-lg border border-amber-200 hover:bg-amber-200 transition-colors"
              aria-label="Aumentar cantidad"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// Componente ProductCategory mejorado
const ProductCategory = ({ category, categoryIndex, onCheckboxChange, onQuantityChange }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasCheckedItems = category.items.some((item) => item.checked)
  const checkedCount = category.items.filter((item) => item.checked).length

  return (
    <div
      className={`overflow-hidden transition-all rounded-xl ${hasCheckedItems ? "border-2 border-chedar shadow-md" : "border border-verde"
        }`}
    >
      <div
        className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${hasCheckedItems ? "bg-chedar" : "bg-white hover:bg-gray-50"
          }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-play text-verde tracking-wide flex items-center">
          {category.name}
          {hasCheckedItems && (
            <span className="ml-3 px-2.5 py-1 text-sm bg-white font-avenir text-verde rounded-full flex items-center justify-center min-w-[1.75rem]">
              {checkedCount}
            </span>
          )}
        </h3>
        <div className={`p-1.5 rounded-full ${hasCheckedItems ? "bg-white" : "bg-gray-100"}`}>
          {isExpanded ? (
            <ChevronUp className={`h-5 w-5 ${hasCheckedItems ? "text-verde" : "text-verde"}`} />
          ) : (
            <ChevronDown className={`h-5 w-5 ${hasCheckedItems ? "text-verde" : "text-verde"}`} />
          )}
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 overflow-y-scroll max-h-[400px] bg-white/50">
          {category.items.map((item) => (
            <ProductItem
              key={item.id}
              item={item}
              onChange={() => onCheckboxChange(categoryIndex, item.id)}
              onQuantityChange={(value) => onQuantityChange(categoryIndex, item.id, value)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Componente SelectedSummary mejorado
const SelectedSummary = ({ selectedProducts = [], totalPrice = 0, onClose = () => { }, onViewPDF = () => { } }) => {
  const totalItems = selectedProducts.reduce((acc, cat) => acc + cat.items.length, 0)

  return (
    <div className="bg-white h-full flex flex-col">
      <div className="p-4 bg-chedar flex justify-between items-center shadow-sm">
        <h3 className="text-lg font-play text-white flex items-center">
          <ShoppingCart className="h-5 w-5 text-white mr-2" />
          Tu Selección
          <span className="ml-2 px-2.5 py-0.5 bg-verde text-white font-avenir rounded-full text-sm">{totalItems}</span>
        </h3>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-amber-100 text-verde transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-white">
        {selectedProducts.length > 0 ? (
          <>
            <div className="space-y-4">
              {selectedProducts.map((category) => (
                <div
                  key={category.name}
                  className="animate-fadeIn bg-white p-4 rounded-xl shadow-sm border border-chedar"
                >
                  <h4 className="font-play tracking-wide text-verde border-b border-amber-200 pb-2 mb-3">{category.name}</h4>
                  <ul className="space-y-3">
                    {category.items.map((item) => {
                      const itemPrice = calculateProductPrice(item.quantity, item.price)
                      return (
                        <li
                          key={item.id}
                          className="flex justify-between items-center text-gray-700 p-2 hover:bg-amber-50 rounded-lg transition-colors"
                        >
                          <div>
                            <span className="font-avenir text-verde">{item.name}</span>
                            <span className="text-sm text-chedar block">{item.detail}</span>
                            <span className="text-xs text-gray-500 block">
                              {formatCurrency(item.price)} / {item.unit}
                            </span>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="font-medium whitespace-nowrap ml-2 px-3 py-1 bg-chedar rounded-lg text-white">
                              {item.quantity} {item.unit}
                            </span>
                            <span className="text-sm font-medium text-emerald-600 mt-1">
                              {formatCurrency(itemPrice)}
                            </span>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-amber-200">
              <div className="flex justify-between items-center mb-6">
                <span className="font-play text-lg text-verde">Total:</span>
                <span className="font-bold text-xl text-emerald-600">{formatCurrency(totalPrice)}</span>
              </div>

              <button
                onClick={onViewPDF}
                className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center shadow-md"
              >
                <Download className="h-5 w-5 mr-2" />
                Ver como PDF
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12 px-4">
            <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="h-8 w-8 text-amber-500" />
            </div>
            <h4 className="text-lg font-medium text-amber-800 mb-2">Tu lista está vacía</h4>
            <p className="text-amber-600">No has seleccionado ningún producto</p>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-amber-100 bg-amber-50 shadow-inner">
        {selectedProducts.length > 0 && (
          <PDFDownloadLink
            document={<MyDocument selectedProducts={selectedProducts} totalPrice={totalPrice} />}
            fileName="lista_compras.pdf"
            className="flex items-center justify-center w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors shadow-md"
          >
            {({ loading }) => (
              <>
                <Download className="h-5 w-5 mr-2" />
                {loading ? "Preparando PDF..." : "Descargar PDF"}
              </>
            )}
          </PDFDownloadLink>
        )}
      </div>
    </div>
  )
}

// Componente principal App mejorado
function App() {
  const [categories, setCategories] = useState(initialCategories)
  const [isClient, setIsClient] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [showPdfViewer, setShowPdfViewer] = useState(false)
  const [shoppingListData, setShoppingListData] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const STORAGE_KEY = "shoppingList";


  useEffect(() => {
    setIsClient(true);

    const checkIfMobile = () => setIsMobile(window.innerWidth < 1024);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem(STORAGE_KEY);

      if (saved) {
        try {
          const parsed = JSON.parse(saved);

          const merged = initialCategories.map((cat) => {
            const oldCat = parsed.find((c) => c.name === cat.name) ?? { items: [] };

            return {
              ...cat,
              items: cat.items.map((item) => {
                const oldItem = oldCat.items.find((i) => i.id === item.id) ?? {};
                return {
                  ...item,
                  checked: oldItem.checked ?? false,
                  quantity: oldItem.quantity ?? 0,
                };
              }),
            };
          });

          setCategories(merged);
        } catch (e) {
          console.error("Error al fusionar datos:", e);
        }
      }
    }

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);


  useEffect(() => {
    if (isClient && typeof window !== "undefined") {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
      } catch (e) {
        console.error("Error al guardar datos:", e);
      }
    }
  }, [categories, isClient]);


  const selectedProducts = useMemo(() => {
    return categories
      .map((category) => ({
        name: category.name,
        items: category.items.filter((item) => item.checked && item.quantity > 0),
      }))
      .filter((category) => category.items.length > 0)
  }, [categories])

  const totalPrice = useMemo(() => {
    return selectedProducts.reduce((total, category) => {
      return total + category.items.reduce((catTotal, item) => {
        return catTotal + calculateProductPrice(item.quantity, item.price)
      }, 0)
    }, 0)
  }, [selectedProducts])

  const handleCheckboxChange = (categoryIndex, itemId) => {
    const updatedCategories = [...categories]
    const itemIndex = updatedCategories[categoryIndex].items.findIndex((item) => item.id === itemId)

    updatedCategories[categoryIndex].items[itemIndex].checked =
      !updatedCategories[categoryIndex].items[itemIndex].checked

    if (
      updatedCategories[categoryIndex].items[itemIndex].checked &&
      !updatedCategories[categoryIndex].items[itemIndex].quantity
    ) {
      updatedCategories[categoryIndex].items[itemIndex].quantity = 1
    }

    setCategories(updatedCategories)
  }

  const handleQuantityChange = (categoryIndex, itemId, value) => {
    const updatedCategories = [...categories]
    const itemIndex = updatedCategories[categoryIndex].items.findIndex((item) => item.id === itemId)

    const parsedValue = Number(value) || 0
    updatedCategories[categoryIndex].items[itemIndex].quantity = Math.max(0, parsedValue)

    setCategories(updatedCategories)
  }

  const clearSelection = () => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        items: category.items.map((item) => ({
          ...item,
          checked: false,
          quantity: 0,
        })),
      })),
    )
    setShowSummary(false)
  }

  const hasSelectedProducts = selectedProducts.length > 0
  const totalSelectedItems = selectedProducts.reduce((acc, cat) => acc + cat.items.length, 0)

  if (showPdfViewer && shoppingListData) {
    return <PDFViewer shoppingListData={shoppingListData} totalPrice={totalPrice} onClose={() => setShowPdfViewer(false)} />
  }

  return (
    <div className="min-h-screen relative font-avenir bg-amber-50/30">
      {/* Fondo decorativo con opacidad reducida */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 opacity-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-full">
          {[...Array(24)].map((_, index) => (
            <img
              key={index}
              src={illustrationImages[index % illustrationImages.length] || "/placeholder.svg"}
              alt=""
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      <HomeButton />

      <div className="max-w-6xl mx-auto px-4 py-6 md:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-xs rounded-2xl overflow-hidden shadow-lg">
          <div className="p-4 md:p-6 lg:p-8">
            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 pb-4 border-b-2 border-verde/10">
              <div className="flex items-center mb-4 md:mb-0">
                <LogoQueseria className="h-16 md:h-20" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-play text-chedar">uesería</h1>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => setShowSummary(!showSummary)}
                  className={`flex items-center justify-center px-4 py-3 rounded-xl font-medium transition-colors w-full sm:w-auto ${hasSelectedProducts
                      ? "bg-chedar text-white hover:bg-chedar shadow-md"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  disabled={!hasSelectedProducts}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  <span>Ver selección</span>
                  {hasSelectedProducts && (
                    <span className="ml-2 font-avenir bg-white text-verde px-2.5 py-0.5 rounded-full">
                      {totalSelectedItems}
                    </span>
                  )}
                </button>

                <button
                  onClick={clearSelection}
                  className="flex items-center justify-center px-4 py-3 bg-white border-2 border-chedar hover:bg-amber-50 text-chedar rounded-xl font-avenir transition-colors w-full sm:w-auto"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  <span className="text-verde">Limpiar lista</span>
                </button>
              </div>
            </header>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Lista principal */}
              <div className={`${showSummary && !isMobile ? "lg:w-3/5" : "w-full"}`}>
                <h2 className="text-xl md:text-2xl font-play mb-4 md:mb-6 text-verde flex items-center">
                  <UserCheck className="h-6 w-6 mr-2 text-verde" />
                  Lista de Compras
                </h2>

                {/* Categorías en mobile: selector horizontal */}
                {isMobile && (
                  <div className="mb-4 overflow-x-auto pb-2">
                    <div className="flex space-x-2 min-w-max">
                      <button
                        onClick={() => setActiveCategory(null)}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${activeCategory === null
                            ? "bg-chedar text-white"
                            : "bg-white border border-amber-200 text-chedar"
                          }`}
                      >
                        Todos los productos
                      </button>
                      {categories.map((category, index) => (
                        <button
                          key={category.name}
                          onClick={() => setActiveCategory(index)}
                          className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${activeCategory === index
                              ? "bg-amber-500 text-white"
                              : "bg-white border border-verde text-verde"
                            } ${category.items.some((item) => item.checked) ? "font-medium" : ""}`}
                        >
                          {category.name}
                          {category.items.some((item) => item.checked) && (
                            <span
                              className={`ml-1.5 px-1.5 text-xs rounded-full ${activeCategory === index ? "bg-white text-amber-600" : "bg-chedar text-white font-bold"
                                }`}
                            >
                              {category.items.filter((item) => item.checked).length}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Lista de categorías */}
                <div className="space-y-4 md:space-y-6">
                  {categories.map((category, categoryIndex) =>
                    isMobile && activeCategory !== null && activeCategory !== categoryIndex ? null : (
                      <ProductCategory
                        key={category.name}
                        category={category}
                        categoryIndex={categoryIndex}
                        onCheckboxChange={handleCheckboxChange}
                        onQuantityChange={handleQuantityChange}
                      />
                    ),
                  )}
                </div>
              </div>

              {/* Panel lateral para desktop */}
              {showSummary && !isMobile && (
                <div className="lg:w-2/5 border-l border-amber-100">
                  <SelectedSummary
                    selectedProducts={selectedProducts}
                    totalPrice={totalPrice}
                    onClose={() => setShowSummary(false)}
                    onViewPDF={() => {
                      setShoppingListData(selectedProducts)
                      setShowPdfViewer(true)
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Panel lateral para mobile (aparece como overlay) */}
      {showSummary && isMobile && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-50">
          <div className="w-full h-full bg-white shadow-xl flex flex-col">
            <SelectedSummary
              selectedProducts={selectedProducts}
              totalPrice={totalPrice}
              onClose={() => setShowSummary(false)}
              onViewPDF={() => {
                setShoppingListData(selectedProducts)
                setShowPdfViewer(true)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App