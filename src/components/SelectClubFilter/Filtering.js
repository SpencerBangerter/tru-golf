export function getUniqueClubs(shotData) {
  const clubTypes = [
    ...new Set(
      shotData.map((shot) => {
        // todo: sort clubs by distances
        return shot.clubTypeKey;
      })
    ),
  ];
  return clubTypes;
}
