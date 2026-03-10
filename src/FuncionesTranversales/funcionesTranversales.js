export default function formatearFecha(fecha) {
if (!fecha){
    return null;
}else {
    // Parsear "yyyy-mm-dd" como fecha LOCAL para evitar desfase UTC
    const parts = String(fecha).split("T")[0].split("-");
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    return `${Number(day)}-${Number(month)}-${year}`;
}
}