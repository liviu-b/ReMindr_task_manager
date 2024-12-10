export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const parseDate = (dateString: string): Date | undefined => {
  return dateString ? new Date(dateString) : undefined;
};