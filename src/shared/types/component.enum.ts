export const Component = {
  RestApplication: Symbol.for('RestApplication'),
  Logger: Symbol.for('Logger'),
  Config: Symbol.for('Config'),
  DatabaseClient: Symbol.for('DatabaseClient'),
  UserService: Symbol.for('UserService'),
  UserModel: Symbol.for('UserModel'),
  OfferService: Symbol.for('OfferService'),
  OfferModel: Symbol.for('OfferModel'),
  ReviewService: Symbol.for('ReviewService'),
  FavoriteService: Symbol.for('FavoriteService'),
  ReviewModel: Symbol.for('ReviewModel'),
  ReviewController: Symbol.for('ReviewController'),
  UserController: Symbol.for('UserController'),
  ExceptionFilter: Symbol.for('ExceptionFilter'),
  OfferController: Symbol.for('OfferController'),
  FavoriteController: Symbol.for('FavoriteController'),
} as const;

