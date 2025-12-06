# Amazonia Pro - Security Edition 🛡️

> **Prueba Técnica - Team Leader**
> *Desarrollo de una plataforma E-commerce completa tipo SPA (Single Page Application) en menos de 48 horas.*


## 📋 Descripción del Proyecto

**Amazonia Pro** es una simulación de alto nivel de un entorno de comercio electrónico, diseñada con un enfoque **Security-First** (Seguridad Primero). 

A diferencia de los clones tradicionales, este proyecto implementa una arquitectura **SPA (Single Page Application)** construida puramente con **JavaScript Vanilla** y **Tailwind CSS**, sin dependencias de compilación (No Node.js/npm required), garantizando portabilidad total y cero errores de despliegue.

### 🎯 Enfoque en Seguridad Digital (Perfil SENA)
Este proyecto destaca por integrar módulos de seguridad simulada para concienciar sobre buenas prácticas:
* **Validación de Credenciales:** Medidor de entropía de contraseñas en tiempo real.
* **MFA Simulado:** Interfaz de Autenticación de Doble Factor (2FA).
* **Auditoría:** Logs de acceso con registro de IP y Timestamp en el perfil de usuario.
* **Transacciones Seguras:** UI de encriptación SSL durante el checkout.

---

## 🚀 Características Principales

### 🛒 Experiencia de Compra (Buyer)
* **Navegación SPA:** Transiciones fluidas entre Vistas (Home, Carrito, Perfil) sin recargas de página.
* **Búsqueda en Tiempo Real:** Filtrado dinámico de productos.
* **Checkout de 3 Pasos:** Dirección -> Pasarela de Pago (Tarjeta/Saldo) -> Resumen.
* **Tracking de Pedidos:** Barra de progreso animada que simula el estado logístico (Preparando -> En Camino -> Entregado).
* **Ecosistema Completo:**
    * **Billetera Digital:** Simulación de recarga de saldo.
    * **Membresía Prime:** Gestión de estado Prime para envíos gratuitos.
    * **Listas de Deseos:** Guardado persistente de favoritos.

### 💼 Panel de Gestión (Seller)
* **Dashboard Dinámico:** Interfaz dedicada para vendedores.
* **Gestión de Inventario:** Carga de productos (Imagen, Precio, Descripción HTML) que se reflejan instantáneamente en la tienda.
* **Persistencia:** Todo el inventario se guarda en `LocalStorage`.

---

## 🛠️ Stack Tecnológico

El proyecto fue diseñado para ser **ligero, rápido y universal**:

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica. |
| **JavaScript (ES6+)** | Lógica SPA, Enrutamiento, Gestión de Estado y Persistencia (`LocalStorage`). |
| **Tailwind CSS (CDN)** | Diseño UI moderno, responsive y animaciones. |
| **SweetAlert2** | Sistema de notificaciones y modales profesionales. |
| **FontAwesome** | Iconografía vectorial. |

---

## ⚙️ Instalación y Uso

Este proyecto no requiere servidores ni instalación de dependencias.

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/aleisii/Amazonia-Pro-Security.git](https://github.com/aleisii/Amazonia-Pro-Security.git)
    ```
2.  **Ejecutar:**
    Simplemente abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox).

### 🧪 Guía de Pruebas (Demo)

Para probar la experiencia completa:

1.  **Como Vendedor (Para poblar la tienda):**
    * Regístrate seleccionando el rol **"Vendedor"**.
    * Ve al "Panel Vendedor" y agrega un producto.
    * *Nota: Si la tienda inicia vacía, es intencional (Empty State) hasta que se cree stock.*

2.  **Como Comprador:**
    * Regístrate con rol **"Comprador"**.
    * Prueba el cupón `SENA2025` en el checkout para un **20% de descuento**.
    * Activa **Prime** en tu perfil para envío gratis.
    * Recarga tu **Billetera** para pagar con saldo.

---

## 📄 Licencia y Créditos

Este proyecto fue desarrollado como parte de un proceso de selección técnica para el rol de **Team Leader**.
Desarrollado con asistencia de IA (Gemini & Google AI Studio) para optimización de arquitectura en plazos cortos.

---
*Hecho con código limpio y pasión por la seguridad.* 🔒 


