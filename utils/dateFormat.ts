function formatDate(date: Date|string): string {
    return date ? new Intl.DateTimeFormat('in-ID', { dateStyle:'medium', }).format(new Date(date)) : 'Undated'
}

export default formatDate