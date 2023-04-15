// movie genere categories
export class GenereType {
  constructor(public readonly value: number, public readonly title: string) {}

  public static get Action(): GenereType {
    return new GenereType(28, 'Action');
  }
  public static get Adventure(): GenereType {
    return new GenereType(12, 'Adventure');
  }
  public static get Animation(): GenereType {
    return new GenereType(16, 'Animation');
  }
  public static get Comedy(): GenereType {
    return new GenereType(35, 'Comedy');
  }
  public static get Crime(): GenereType {
    return new GenereType(80, 'Crime');
  }
  public static get Documentary(): GenereType {
    return new GenereType(99, 'Documentary');
  }
  public static get Drama(): GenereType {
    return new GenereType(18, 'Drama');
  }
  public static get Family(): GenereType {
    return new GenereType(10751, 'Family');
  }
  public static get Fantasy(): GenereType {
    return new GenereType(14, 'Fantasy');
  }
  public static get History(): GenereType {
    return new GenereType(36, 'History');
  }
  public static get Horror(): GenereType {
    return new GenereType(27, 'Horror');
  }
  public static get Music(): GenereType {
    return new GenereType(10402, 'Music');
  }
  public static Mystery(): GenereType {
    return new GenereType(9648, 'Mystery');
  }
  public static Romance(): GenereType {
    return new GenereType(10749, 'Romance');
  }
  public static ScienceFiction(): GenereType {
    return new GenereType(878, 'Science Fiction');
  }
  public static TvMovies(): GenereType {
    return new GenereType(10770, 'TV Movies');
  }
  public static Thriller(): GenereType {
    return new GenereType(53, 'Thriller');
  }
  public static War(): GenereType {
    return new GenereType(10752, 'War');
  }
  public static Western(): GenereType {
    return new GenereType(37, 'Western');
  }

  public static items = [
    GenereType.Action,
    GenereType.Adventure,
    GenereType.Animation,
    GenereType.Comedy,
    GenereType.Crime,
    GenereType.Documentary,
    GenereType.Drama,
    GenereType.Family,
    GenereType.Fantasy,
    GenereType.History,
    GenereType.Horror,
    GenereType.Music,
    GenereType.Mystery,
    GenereType.Romance,
    GenereType.ScienceFiction,
    GenereType.TvMovies,
    GenereType.Thriller,
    GenereType.War,
    GenereType.Western,
  ];

  public static titles = this.items.map(s => s.title);
  public static values = this.items.map(s => s.value);
}

// movie rating -> All / Rated-R
export class Rating {
  constructor(public readonly value: number, public readonly title: string) {}

  public static All(): Rating {
    return new Rating(0, 'All');
  }

  public static R(): Rating {
    return new Rating(1, 'R');
  }

  public static items = [Rating.All, Rating.R];

  public static titles = this.items.map(s => s.title);
  public static values = this.items.map(s => s.value);
}

// error messages
export class ErrorMessage {
  constructor(public readonly value: number, public readonly title: string) {}

  public static get Internet(): ErrorMessage {
    return new ErrorMessage(
      0,
      'Unable to connect to retrive data.\n Please check internet connection',
    );
  }

  public static get General(): ErrorMessage {
    return new ErrorMessage(1, 'We are unable to retrive data');
  }

  public static items = [this.Internet, this.General];

  public static titles = this.items.map(s => s.title);
  public static values = this.items.map(s => s.value);
}
