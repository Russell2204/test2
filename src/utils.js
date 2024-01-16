const pressureUnits = 0.750062

export const getPressure = (hpa) => {
    return Math.round(hpa * pressureUnits)
}

export function unix(dt, type) { 
    const time = dt * 1000
    const data = new Date(time)
    let result = 
    type == 'day' ? data.toLocaleString('ru-RU', {day: 'numeric'}) :
    type == 'month' ? data.toLocaleString('ru-RU', {month: 'long'}) :
    type == 'weekday' ? data.toLocaleString('ru-RU', {weekday: 'long'}) : ''
    return result
 }