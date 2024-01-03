
export default (context, inject) => {
  inject('notEmpty', (...fields) => {
    let isEmpty = false

    for (var i = 0, field = fields[i]; i < fields.length; i++) {
      if (
        !field ||
        Array.isArray(field) && !field.length ||
        field.link_type === 'Web' && !field.url ||
        field.link_type === 'Any' || 
        field.length === 1 && !field[0].text) {
      } else {
        return true
      }
    }
    return false
  });
}