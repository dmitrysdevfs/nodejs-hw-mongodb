function parseContactType(value) {
  if (typeof value === 'undefined') {
    return undefined;
  }

  const keys = ['personal', 'home', 'work'];

  if (keys.includes(value) !== true) {
    return undefined;
  }

  return value;
}

function parseIsFavourite(value) {
  if (typeof value === 'undefined') {
    return undefined;
  }

  const isFavouriteValue = String(value);

  if (isFavouriteValue === 'true') {
    return 'true';
  }

  return isFavouriteValue;
}

export function parseFilterParams(query) {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
}
