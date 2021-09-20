import ErrorRepository from '../ErrorRepository';

const errorRepository = new ErrorRepository();
errorRepository.errors.set(400, 'Bad Request');
errorRepository.errors.set(404, 'Not Found');
errorRepository.errors.set(408, 'Request Timeout');

test('should return an error by code', () => {
  expect(errorRepository.translate(404)).toBe('Not Found');
});

test('should return an error if no such code exists', () => {
  expect(errorRepository.translate(405)).toBe('Unknown error');
});
