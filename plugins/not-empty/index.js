
export default (context, inject) => {
  inject('notEmpty', (...fields) => {
    for (var i = 0, field = fields[i]; i < fields.length; i++) {
      if (
        !field ||
        Array.isArray(field) && !field.length ||
        field.link_type === 'Web' && !field.url ||
        field.link_type === 'Any' || 
        field.length === 1 && !field[0].text) {
        return false
      }
    }
    return true
  });
}