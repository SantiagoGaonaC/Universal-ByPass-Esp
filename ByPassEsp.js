// Algunos ejemplos de lo que puede hacer con omisiones personalizadas:
domainBypass("example.com", () => {
	// Activado en ejemplo.com y subdominios (por ejemplo, www.ejemplo.com)
	ensureDomLoaded(() => {
		// Activado tan pronto como el DOM esté listo
	})
	// Puede usar ifElement para verificar si un elemento está disponible a través de document.querySelector:
	ifElement("a#skip_button[href]", a => {
		safelyNavigate(a.href)
		// safeNavigate afirma que la URL dada es válida antes de navegar y devuelve falso si no
	}, () => {
		// Función opcional a llamar si el elemento dado no está disponible
	})
	// También puede usar awaitElement para esperar hasta que un elemento esté disponible a través de un selector de consultas:
	awaitElement("a#skip_button[href]", a => {
		safelyAssign(a.href)
		// safeAssign es lo mismo que safeNavigate pero omite el
// Página "Ya casi llegas a tu destino", si el usuario la tiene habilitada
	})
})
domainBypass(/example\.(com|org)/, () => {
	// Activado si la expresión regular coincide con cualquier parte del nombre de host
})
hrefBypass(/example\.(com|org)/, () => {
	// Activado si la expresión regular coincide con cualquier parte de la URL
})
// ¡Disfrutar! Sus cambios se guardarán automáticamente.
