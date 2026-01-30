export interface Team {
    id: string;
    name: string;
    symbol: string;
    image: string;
    sport: 'football' | 'basketball' | 'cricket';
    stadium: string;
    league: 'EPL' | 'LaLiga' | 'BundesLiga' | 'SerieA' | 'Ligue1' | 'ChampionsLeague' | 'EuropaLeague' | 'NBA' | 'EuroLeague' | 'IPL';
    country: string;
}

export interface MatchEvent {
    eventId: string;
    league: string;
    homeTeam: Team;
    awayTeam: Team;
    venue: string;
    date: string;
    time: string;
    homeWinOdds: number;
    awayWinOdds: number;
    drawOdds: number | null;
}

export interface CasinoGame {
    id: string;
    name: string;
    type: 'slot' | 'table' | 'ai';
    image: string;
    description: string;
}

export const footballTeams: Team[] = [
    // EPL Teams
    {
        id: 'team-001',
        name: 'Manchester United',
        symbol: 'MUN',
        image: '/images/teams/england/Man-Utd.png',
        sport: 'football',
        stadium: 'Old Trafford',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-002',
        name: 'Manchester City',
        symbol: 'MCI',
        image: '/images/teams/england/Man-City.png',
        sport: 'football',
        stadium: 'Etihad Stadium',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-003',
        name: 'Liverpool',
        symbol: 'LIV',
        image: '/images/teams/england/Liverpool.png',
        sport: 'football',
        stadium: 'Anfield',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-004',
        name: 'Arsenal',
        symbol: 'ARS',
        image: '/images/teams/england/Arsenal.png',
        sport: 'football',
        stadium: 'Emirates Stadium',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-005',
        name: 'Chelsea',
        symbol: 'CHE',
        image: '/images/teams/england/Chelsea.png',
        sport: 'football',
        stadium: 'Stamford Bridge',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-011',
        name: 'Aston Villa',
        symbol: 'AVL',
        image: '/images/teams/england/Aston-Villa.png',
        sport: 'football',
        stadium: 'Villa Park',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-012',
        name: 'Bournemouth',
        symbol: 'BOU',
        image: '/images/teams/england/Bournemouth.png',
        sport: 'football',
        stadium: 'Vitality Stadium',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-013',
        name: 'Brentford',
        symbol: 'BRE',
        image: '/images/teams/england/Brentford.png',
        sport: 'football',
        stadium: 'Gtech Community Stadium',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-014',
        name: 'Brighton & Hove Albion',
        symbol: 'BHA',
        image: '/images/teams/england/Brighton-Hove-Albion.png',
        sport: 'football',
        stadium: 'Amex Stadium',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-015',
        name: 'Burnley',
        symbol: 'BUR',
        image: '/images/teams/england/Burnley.png',
        sport: 'football',
        stadium: 'Turf Moor',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-016',
        name: 'Crystal Palace',
        symbol: 'CRY',
        image: '/images/teams/england/Crystal-Palace.png',
        sport: 'football',
        stadium: 'Selhurst Park',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-017',
        name: 'Everton',
        symbol: 'EVE',
        image: '/images/teams/england/Everton.png',
        sport: 'football',
        stadium: 'Goodison Park',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-018',
        name: 'Fulham',
        symbol: 'FUL',
        image: '/images/teams/england/Fulham.png',
        sport: 'football',
        stadium: 'Craven Cottage',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-019',
        name: 'Luton Town',
        symbol: 'LUT',
        image: '/images/teams/england/Luton-Town.png',
        sport: 'football',
        stadium: 'Kenilworth Road',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-020',
        name: 'Newcastle United',
        symbol: 'NEW',
        image: '/images/teams/england/Newcastle-United.png',
        sport: 'football',
        stadium: 'St James Park',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-021',
        name: 'Nottingham Forest',
        symbol: 'NFO',
        image: '/images/teams/england/Nottingham-Forest.png',
        sport: 'football',
        stadium: 'City Ground',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-022',
        name: 'Sheffield United',
        symbol: 'SHU',
        image: '/images/teams/england/Sheffield-United.png',
        sport: 'football',
        stadium: 'Bramall Lane',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-023',
        name: 'Tottenham Hotspur',
        symbol: 'TOT',
        image: '/images/teams/england/Tottenham-Hotspur.png',
        sport: 'football',
        stadium: 'Tottenham Hotspur Stadium',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-024',
        name: 'West Ham United',
        symbol: 'WHU',
        image: '/images/teams/england/West-Ham-United.png',
        sport: 'football',
        stadium: 'London Stadium',
        league: 'EPL',
        country: 'England'
    },
    {
        id: 'team-025',
        name: 'Wolverhampton Wanderers',
        symbol: 'WOL',
        image: '/images/teams/england/Wolverhampton-Wanderers.png',
        sport: 'football',
        stadium: 'Molineux Stadium',
        league: 'EPL',
        country: 'England'
    },
    // LaLiga Teams
    {
        id: 'team-006',
        name: 'Real Madrid',
        symbol: 'RMA',
        image: '/images/teams/spain/Real-Madrid.png',
        sport: 'football',
        stadium: 'Santiago Bernabéu',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-007',
        name: 'Barcelona',
        symbol: 'BAR',
        image: '/images/teams/spain/Barcelona.png',
        sport: 'football',
        stadium: 'Camp Nou',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-008',
        name: 'Atlético Madrid',
        symbol: 'ATM',
        image: '/images/teams/spain/Atletico-Madrid.png',
        sport: 'football',
        stadium: 'Wanda Metropolitano',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-026',
        name: 'Alavés',
        symbol: 'ALA',
        image: '/images/teams/spain/Alaves.png',
        sport: 'football',
        stadium: 'Mendizorrotza',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-027',
        name: 'Almería',
        symbol: 'ALM',
        image: '/images/teams/spain/Almeria.png',
        sport: 'football',
        stadium: 'Estadio de los Juegos Mediterráneos',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-028',
        name: 'Athletic Bilbao',
        symbol: 'ATH',
        image: '/images/teams/spain/Athletic-Bilbao.png',
        sport: 'football',
        stadium: 'San Mamés',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-029',
        name: 'Cádiz',
        symbol: 'CAD',
        image: '/images/teams/spain/Cadiz.png',
        sport: 'football',
        stadium: 'Estadio Nuevo Mirandilla',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-030',
        name: 'Celta Vigo',
        symbol: 'CEL',
        image: '/images/teams/spain/Celta-Vigo.png',
        sport: 'football',
        stadium: 'Balaídos',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-031',
        name: 'Getafe',
        symbol: 'GET',
        image: '/images/teams/spain/Getafe.png',
        sport: 'football',
        stadium: 'Coliseum Alfonso Pérez',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-032',
        name: 'Girona',
        symbol: 'GIR',
        image: '/images/teams/spain/Girona.png',
        sport: 'football',
        stadium: 'Montilivi',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-033',
        name: 'Granada',
        symbol: 'GRA',
        image: '/images/teams/spain/Granada.png',
        sport: 'football',
        stadium: 'Los Cármenes',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-034',
        name: 'Las Palmas',
        symbol: 'LAS',
        image: '/images/teams/spain/Las-Palmas.png',
        sport: 'football',
        stadium: 'Estadio Gran Canaria',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-035',
        name: 'Mallorca',
        symbol: 'MAL',
        image: '/images/teams/spain/Mallorca.png',
        sport: 'football',
        stadium: 'Son Moix',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-036',
        name: 'Osasuna',
        symbol: 'OSA',
        image: '/images/teams/spain/Osasuna.png',
        sport: 'football',
        stadium: 'El Sadar',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-037',
        name: 'Rayo Vallecano',
        symbol: 'RAY',
        image: '/images/teams/spain/Rayo-Vallecano.png',
        sport: 'football',
        stadium: 'Vallecas',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-038',
        name: 'Real Betis',
        symbol: 'BET',
        image: '/images/teams/spain/Real-Betis.png',
        sport: 'football',
        stadium: 'Benito Villamarín',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-039',
        name: 'Real Sociedad',
        symbol: 'RSO',
        image: '/images/teams/spain/Real-Sociedad.png',
        sport: 'football',
        stadium: 'Anoeta',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-040',
        name: 'Sevilla',
        symbol: 'SEV',
        image: '/images/teams/spain/Sevilla.png',
        sport: 'football',
        stadium: 'Ramón Sánchez Pizjuán',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-041',
        name: 'Valencia',
        symbol: 'VAL',
        image: '/images/teams/spain/Valencia.png',
        sport: 'football',
        stadium: 'Mestalla',
        league: 'LaLiga',
        country: 'Spain'
    },
    {
        id: 'team-042',
        name: 'Villarreal',
        symbol: 'VIL',
        image: '/images/teams/spain/Villarreal.png',
        sport: 'football',
        stadium: 'La Cerámica',
        league: 'LaLiga',
        country: 'Spain'
    },
    // BundesLiga Teams
    {
        id: 'team-009',
        name: 'Bayern Munich',
        symbol: 'BAY',
        image: '/images/teams/germany/Bayern-München.png',
        sport: 'football',
        stadium: 'Allianz Arena',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-010',
        name: 'Borussia Dortmund',
        symbol: 'BVB',
        image: '/images/teams/germany/Borussia-Dortmund.png',
        sport: 'football',
        stadium: 'Signal Iduna Park',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-043',
        name: 'FC Augsburg',
        symbol: 'AUG',
        image: '/images/teams/germany/FC-Augsburg.png',
        sport: 'football',
        stadium: 'WWK Arena',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-044',
        name: 'Union Berlin',
        symbol: 'BER',
        image: '/images/teams/germany/Union-Berlin.png',
        sport: 'football',
        stadium: 'Stadion An der Alten Försterei',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-045',
        name: 'VfL Bochum',
        symbol: 'BOC',
        image: '/images/teams/germany/VfL-Bochum.png',
        sport: 'football',
        stadium: 'Vonovia Ruhrstadion',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-046',
        name: 'Werder Bremen',
        symbol: 'BRE',
        image: '/images/teams/germany/Werder-Bremen.png',
        sport: 'football',
        stadium: 'Wohninvest Weserstadion',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-047',
        name: 'SV Darmstadt 98',
        symbol: 'DAR',
        image: '/images/teams/germany/SV-Darmstadt-98.png',
        sport: 'football',
        stadium: 'Merck-Stadion am Böllenfalltor',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-048',
        name: 'Eintracht Frankfurt',
        symbol: 'FRA',
        image: '/images/teams/germany/Eintracht-Frankfurt.png',
        sport: 'football',
        stadium: 'Deutsche Bank Park',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-049',
        name: 'SC Freiburg',
        symbol: 'FRE',
        image: '/images/teams/germany/SC-Freiburg.png',
        sport: 'football',
        stadium: 'Europa-Park Stadion',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-050',
        name: '1. FC Heidenheim',
        symbol: 'HEI',
        image: '/images/teams/germany/1-FC-Heidenheim.png',
        sport: 'football',
        stadium: 'Voith-Arena',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-051',
        name: 'TSG Hoffenheim',
        symbol: 'HOF',
        image: '/images/teams/germany/TSG-Hoffenheim.png',
        sport: 'football',
        stadium: 'PreZero Arena',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-052',
        name: '1. FC Köln',
        symbol: 'KOL',
        image: '/images/teams/germany/1-FC-Koln.png',
        sport: 'football',
        stadium: 'RheinEnergieStadion',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-053',
        name: 'RB Leipzig',
        symbol: 'LEI',
        image: '/images/teams/germany/RB-Leipzig.png',
        sport: 'football',
        stadium: 'Red Bull Arena',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-054',
        name: 'Bayer Leverkusen',
        symbol: 'LEV',
        image: '/images/teams/germany/Bayer-Leverkusen.png',
        sport: 'football',
        stadium: 'BayArena',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-055',
        name: 'Mainz 05',
        symbol: 'MAI',
        image: '/images/teams/germany/Mainz-05.png',
        sport: 'football',
        stadium: 'Mewa Arena',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-056',
        name: 'Borussia Mönchengladbach',
        symbol: 'MGL',
        image: '/images/teams/germany/Borussia-Monchengladbach.png',
        sport: 'football',
        stadium: 'Borussia-Park',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-057',
        name: 'VfB Stuttgart',
        symbol: 'STU',
        image: '/images/teams/germany/VfB-Stuttgart.png',
        sport: 'football',
        stadium: 'MHPArena',
        league: 'BundesLiga',
        country: 'Germany'
    },
    {
        id: 'team-058',
        name: 'VfL Wolfsburg',
        symbol: 'WOL',
        image: '/images/teams/germany/VfL-Wolfsburg.png',
        sport: 'football',
        stadium: 'Volkswagen Arena',
        league: 'BundesLiga',
        country: 'Germany'
    },
    // Serie A Teams
    {
        id: 'team-059',
        name: 'Inter Milan',
        symbol: 'INT',
        image: '/images/teams/italy/Inter-Milan.png',
        sport: 'football',
        stadium: 'San Siro',
        league: 'SerieA',
        country: 'Italy'
    },
    {
        id: 'team-060',
        name: 'Juventus',
        symbol: 'JUV',
        image: '/images/teams/italy/Juventus.png',
        sport: 'football',
        stadium: 'Allianz Stadium',
        league: 'SerieA',
        country: 'Italy'
    },
    {
        id: 'team-061',
        name: 'AC Milan',
        symbol: 'MIL',
        image: '/images/teams/italy/AC-Milan.png',
        sport: 'football',
        stadium: 'San Siro',
        league: 'SerieA',
        country: 'Italy'
    },
    {
        id: 'team-062',
        name: 'Napoli',
        symbol: 'NAP',
        image: '/images/teams/italy/Napoli.png',
        sport: 'football',
        stadium: 'Stadio Diego Armando Maradona',
        league: 'SerieA',
        country: 'Italy'
    },
    {
        id: 'team-063',
        name: 'Lazio',
        symbol: 'LAZ',
        image: '/images/teams/italy/Lazio.png',
        sport: 'football',
        stadium: 'Stadio Olimpico',
        league: 'SerieA',
        country: 'Italy'
    },
    {
        id: 'team-064',
        name: 'Roma',
        symbol: 'ROM',
        image: '/images/teams/italy/Roma.png',
        sport: 'football',
        stadium: 'Stadio Olimpico',
        league: 'SerieA',
        country: 'Italy'
    },
    {
        id: 'team-065',
        name: 'Atalanta',
        symbol: 'ATA',
        image: '/images/teams/italy/Atalanta.png',
        sport: 'football',
        stadium: 'Gewiss Stadium',
        league: 'SerieA',
        country: 'Italy'
    },
    // Ligue 1 Teams
    {
        id: 'team-066',
        name: 'Paris Saint-Germain',
        symbol: 'PSG',
        image: '/images/teams/france/PSG.png',
        sport: 'football',
        stadium: 'Parc des Princes',
        league: 'Ligue1',
        country: 'France'
    },
    {
        id: 'team-067',
        name: 'Monaco',
        symbol: 'MON',
        image: '/images/teams/france/Monaco.png',
        sport: 'football',
        stadium: 'Stade Louis II',
        league: 'Ligue1',
        country: 'France'
    },
    {
        id: 'team-068',
        name: 'Lyon',
        symbol: 'LYO',
        image: '/images/teams/france/Lyon.png',
        sport: 'football',
        stadium: 'Groupama Stadium',
        league: 'Ligue1',
        country: 'France'
    },
    {
        id: 'team-069',
        name: 'Marseille',
        symbol: 'MAR',
        image: '/images/teams/france/Marseille.png',
        sport: 'football',
        stadium: 'Orange Vélodrome',
        league: 'Ligue1',
        country: 'France'
    },
    {
        id: 'team-070',
        name: 'Lille',
        symbol: 'LIL',
        image: '/images/teams/france/Lille.png',
        sport: 'football',
        stadium: 'Stade Pierre-Mauroy',
        league: 'Ligue1',
        country: 'France'
    },
    {
        id: 'team-071',
        name: 'Lens',
        symbol: 'LEN',
        image: '/images/teams/france/Lens.png',
        sport: 'football',
        stadium: 'Stade Félix Bollaert',
        league: 'Ligue1',
        country: 'France'
    },
    {
        id: 'team-072',
        name: 'Nice',
        symbol: 'NIC',
        image: '/images/teams/france/Nice.png',
        sport: 'football',
        stadium: 'Allianz Riviera',
        league: 'Ligue1',
        country: 'France'
    }
];

export const basketballTeams: Team[] = [
    {
        id: 'team-101',
        name: 'Los Angeles Lakers',
        symbol: 'LAL',
        image: '/images/basketball/usa/lakers.png',
        sport: 'basketball',
        stadium: 'Crypto.com Arena',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-102',
        name: 'Golden State Warriors',
        symbol: 'GSW',
        image: '/images/basketball/usa/warriors.png',
        sport: 'basketball',
        stadium: 'Chase Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-103',
        name: 'Boston Celtics',
        symbol: 'BOS',
        image: '/images/basketball/usa/celtics.png',
        sport: 'basketball',
        stadium: 'TD Garden',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-104',
        name: 'Atlanta Hawks',
        symbol: 'ATL',
        image: '/images/basketball/usa/hawks.png',
        sport: 'basketball',
        stadium: 'State Farm Arena',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-105',
        name: 'Brooklyn Nets',
        symbol: 'BKN',
        image: '/images/basketball/usa/nets.png',
        sport: 'basketball',
        stadium: 'Barclays Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-106',
        name: 'Charlotte Hornets',
        symbol: 'CHA',
        image: '/images/basketball/usa/hornets.png',
        sport: 'basketball',
        stadium: 'Spectrum Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-107',
        name: 'Chicago Bulls',
        symbol: 'CHI',
        image: '/images/basketball/usa/bulls.png',
        sport: 'basketball',
        stadium: 'United Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-108',
        name: 'Cleveland Cavaliers',
        symbol: 'CLE',
        image: '/images/basketball/usa/cavaliers.png',
        sport: 'basketball',
        stadium: 'Rocket Mortgage FieldHouse',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-109',
        name: 'Dallas Mavericks',
        symbol: 'DAL',
        image: '/images/basketball/usa/mavericks.png',
        sport: 'basketball',
        stadium: 'American Airlines Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-110',
        name: 'Denver Nuggets',
        symbol: 'DEN',
        image: '/images/basketball/usa/nuggets.png',
        sport: 'basketball',
        stadium: 'Ball Arena',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-111',
        name: 'Detroit Pistons',
        symbol: 'DET',
        image: '/images/basketball/usa/pistons.png',
        sport: 'basketball',
        stadium: 'Little Caesars Arena',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-112',
        name: 'Houston Rockets',
        symbol: 'HOU',
        image: '/images/basketball/usa/rockets.png',
        sport: 'basketball',
        stadium: 'Toyota Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-113',
        name: 'Indiana Pacers',
        symbol: 'IND',
        image: '/images/basketball/usa/pacers.png',
        sport: 'basketball',
        stadium: 'Gainbridge Fieldhouse',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-114',
        name: 'LA Clippers',
        symbol: 'LAC',
        image: '/images/basketball/usa/clippers.png',
        sport: 'basketball',
        stadium: 'Crypto.com Arena',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-115',
        name: 'Memphis Grizzlies',
        symbol: 'MEM',
        image: '/images/basketball/usa/grizzlies.png',
        sport: 'basketball',
        stadium: 'FedExForum',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-116',
        name: 'Miami Heat',
        symbol: 'MIA',
        image: '/images/basketball/usa/heat.png',
        sport: 'basketball',
        stadium: 'Kaseya Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-117',
        name: 'Milwaukee Bucks',
        symbol: 'MIL',
        image: '/images/basketball/usa/bucks.png',
        sport: 'basketball',
        stadium: 'Fiserv Forum',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-118',
        name: 'Minnesota Timberwolves',
        symbol: 'MIN',
        image: '/images/basketball/usa/timberwolves.png',
        sport: 'basketball',
        stadium: 'Target Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-119',
        name: 'New Orleans Pelicans',
        symbol: 'NOP',
        image: '/images/basketball/usa/pelicans.png',
        sport: 'basketball',
        stadium: 'Smoothie King Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-120',
        name: 'New York Knicks',
        symbol: 'NYK',
        image: '/images/basketball/usa/knicks.png',
        sport: 'basketball',
        stadium: 'Madison Square Garden',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-121',
        name: 'Oklahoma City Thunder',
        symbol: 'OKC',
        image: '/images/basketball/usa/thunder.png',
        sport: 'basketball',
        stadium: 'Paycom Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-122',
        name: 'Orlando Magic',
        symbol: 'ORL',
        image: '/images/basketball/usa/magic.png',
        sport: 'basketball',
        stadium: 'Kia Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-123',
        name: 'Philadelphia 76ers',
        symbol: 'PHI',
        image: '/images/basketball/usa/76ers.png',
        sport: 'basketball',
        stadium: 'Wells Fargo Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-124',
        name: 'Phoenix Suns',
        symbol: 'PHX',
        image: '/images/basketball/usa/suns.png',
        sport: 'basketball',
        stadium: 'Footprint Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-125',
        name: 'Portland Trail Blazers',
        symbol: 'POR',
        image: '/images/basketball/usa/trail-blazers.png',
        sport: 'basketball',
        stadium: 'Moda Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-126',
        name: 'Sacramento Kings',
        symbol: 'SAC',
        image: '/images/basketball/usa/kings.png',
        sport: 'basketball',
        stadium: 'Golden 1 Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-127',
        name: 'San Antonio Spurs',
        symbol: 'SAS',
        image: '/images/basketball/usa/spurs.png',
        sport: 'basketball',
        stadium: 'Frost Bank Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-128',
        name: 'Toronto Raptors',
        symbol: 'TOR',
        image: '/images/basketball/canada/raptors.png',
        sport: 'basketball',
        stadium: 'Scotiabank Arena',
        league: 'NBA',
        country: 'Canada'
    },
    {
        id: 'team-129',
        name: 'Utah Jazz',
        symbol: 'UTA',
        image: '/images/basketball/usa/jazz.png',
        sport: 'basketball',
        stadium: 'Delta Center',
        league: 'NBA',
        country: 'USA'
    },
    {
        id: 'team-130',
        name: 'Washington Wizards',
        symbol: 'WAS',
        image: '/images/basketball/usa/wizards.png',
        sport: 'basketball',
        stadium: 'Capital One Arena',
        league: 'NBA',
        country: 'USA'
    },
    // EuroLeague Teams
    {
        id: 'team-201',
        name: 'Real Madrid Basketball',
        symbol: 'RMB',
        image: '/images/basketball/spain/real-madrid-basket.png',
        sport: 'basketball',
        stadium: 'WiZink Center',
        league: 'EuroLeague',
        country: 'Spain'
    },
    {
        id: 'team-202',
        name: 'ALBA Berlin',
        symbol: 'ALB',
        image: '/images/basketball/germany/alba-berlin.png',
        sport: 'basketball',
        stadium: 'Uber Arena',
        league: 'EuroLeague',
        country: 'Germany'
    },
    {
        id: 'team-203',
        name: 'Anadolu Efes Istanbul',
        symbol: 'EFS',
        image: '/images/basketball/turkey/anadolu-efes.png',
        sport: 'basketball',
        stadium: 'Sinan Erdem Dome',
        league: 'EuroLeague',
        country: 'Turkey'
    },
    {
        id: 'team-204',
        name: 'AS Monaco',
        symbol: 'MON',
        image: '/images/basketball/monaco/as-monaco.png',
        sport: 'basketball',
        stadium: 'Salle Gaston Médecin',
        league: 'EuroLeague',
        country: 'Monaco'
    },
    {
        id: 'team-205',
        name: 'Baskonia',
        symbol: 'BAS',
        image: '/images/basketball/spain/baskonia.png',
        sport: 'basketball',
        stadium: 'Fernando Buesa Arena',
        league: 'EuroLeague',
        country: 'Spain'
    },
    {
        id: 'team-206',
        name: 'Crvena Zvezda Belgrade',
        symbol: 'CZV',
        image: '/images/basketball/serbia/crvena-zvezda.png',
        sport: 'basketball',
        stadium: 'Belgrade Arena',
        league: 'EuroLeague',
        country: 'Serbia'
    },
    {
        id: 'team-207',
        name: 'EA7 Emporio Armani Milan',
        symbol: 'MIL',
        image: '/images/basketball/italy/ea7-milan.png',
        sport: 'basketball',
        stadium: 'Mediolanum Forum',
        league: 'EuroLeague',
        country: 'Italy'
    },
    {
        id: 'team-208',
        name: 'FC Barcelona',
        symbol: 'BAR',
        image: '/images/basketball/spain/fc-barcelona-basket.png',
        sport: 'basketball',
        stadium: 'Palau Blaugrana',
        league: 'EuroLeague',
        country: 'Spain'
    },
    {
        id: 'team-209',
        name: 'FC Bayern Munich',
        symbol: 'BAY',
        image: '/images/basketball/germany/fc-bayern-munich.png',
        sport: 'basketball',
        stadium: 'BMW Park',
        league: 'EuroLeague',
        country: 'Germany'
    },
    {
        id: 'team-210',
        name: 'Fenerbahce Beko Istanbul',
        symbol: 'FEN',
        image: '/images/basketball/turkey/fenerbahce.png',
        sport: 'basketball',
        stadium: 'Ülker Sports Arena',
        league: 'EuroLeague',
        country: 'Turkey'
    },
    {
        id: 'team-211',
        name: 'Maccabi Playtika Tel Aviv',
        symbol: 'MAC',
        image: '/images/basketball/israel/maccabi-tel-aviv.png',
        sport: 'basketball',
        stadium: 'Menora Mivtachim Arena',
        league: 'EuroLeague',
        country: 'Israel'
    },
    {
        id: 'team-212',
        name: 'Olympiacos Piraeus',
        symbol: 'OLY',
        image: '/images/basketball/greece/olympiacos.png',
        sport: 'basketball',
        stadium: 'Peace and Friendship Stadium',
        league: 'EuroLeague',
        country: 'Greece'
    },
    {
        id: 'team-213',
        name: 'Panathinaikos Athens',
        symbol: 'PAO',
        image: '/images/basketball/greece/panathinaikos.png',
        sport: 'basketball',
        stadium: 'O.A.C.A. Olympic Indoor Hall',
        league: 'EuroLeague',
        country: 'Greece'
    },
    {
        id: 'team-214',
        name: 'Partizan Belgrade',
        symbol: 'PAR',
        image: '/images/basketball/serbia/partizan.png',
        sport: 'basketball',
        stadium: 'Belgrade Arena',
        league: 'EuroLeague',
        country: 'Serbia'
    },
    {
        id: 'team-215',
        name: 'Valencia Basket',
        symbol: 'VAL',
        image: '/images/basketball/spain/valencia-basket.png',
        sport: 'basketball',
        stadium: 'La Fonteta',
        league: 'EuroLeague',
        country: 'Spain'
    },
    {
        id: 'team-216',
        name: 'Virtus Segafredo Bologna',
        symbol: 'VIR',
        image: '/images/basketball/italy/virtus-bologna.png',
        sport: 'basketball',
        stadium: 'Segafredo Arena',
        league: 'EuroLeague',
        country: 'Italy'
    },
    {
        id: 'team-217',
        name: 'LDLC ASVEL Villeurbanne',
        symbol: 'ASV',
        image: '/images/basketball/france/asvel.png',
        sport: 'basketball',
        stadium: 'LDLC Arena',
        league: 'EuroLeague',
        country: 'France'
    },
    {
        id: 'team-218',
        name: 'Zalgiris Kaunas',
        symbol: 'ZAL',
        image: '/images/basketball/lithuania/zalgiris-kaunas.png',
        sport: 'basketball',
        stadium: 'Zalgirio Arena',
        league: 'EuroLeague',
        country: 'Lithuania'
    }
];

export const cricketTeams: Team[] = [
    {
        id: 'team-301',
        name: 'Chennai Super Kings',
        symbol: 'CSK',
        image: '/images/teams/india/Chennai-Super-Kings.png',
        sport: 'cricket',
        stadium: 'M. A. Chidambaram Stadium',
        league: 'IPL',
        country: 'India'
    },
    {
        id: 'team-302',
        name: 'Delhi Capitals',
        symbol: 'DC',
        image: '/images/teams/india/Delhi-Capitals.png',
        sport: 'cricket',
        stadium: 'Arun Jaitley Stadium',
        league: 'IPL',
        country: 'India'
    },
    {
        id: 'team-303',
        name: 'Gujarat Titans',
        symbol: 'GT',
        image: '/images/teams/india/Gujarat-Titans.png',
        sport: 'cricket',
        stadium: 'Narendra Modi Stadium',
        league: 'IPL',
        country: 'India'
    },
    {
        id: 'team-304',
        name: 'Kolkata Knight Riders',
        symbol: 'KKR',
        image: '/images/teams/india/Kolkata-Knight-Riders.png',
        sport: 'cricket',
        stadium: 'Eden Gardens',
        league: 'IPL',
        country: 'India'
    },
    {
        id: 'team-305',
        name: 'Lucknow Super Giants',
        symbol: 'LSG',
        image: '/images/teams/india/Lucknow-Super-Giants.png',
        sport: 'cricket',
        stadium: 'BRSABV Ekana Cricket Stadium',
        league: 'IPL',
        country: 'India'
    },
    {
        id: 'team-306',
        name: 'Mumbai Indians',
        symbol: 'MI',
        image: '/images/teams/india/Mumbai-Indians.png',
        sport: 'cricket',
        stadium: 'Wankhede Stadium',
        league: 'IPL',
        country: 'India'
    },
    {
        id: 'team-307',
        name: 'Punjab Kings',
        symbol: 'PBKS',
        image: '/images/teams/india/Punjab-Kings.png',
        sport: 'cricket',
        stadium: 'PCA New Stadium, Mullanpur',
        league: 'IPL',
        country: 'India'
    },
    {
        id: 'team-308',
        name: 'Rajasthan Royals',
        symbol: 'RR',
        image: '/images/teams/india/Rajasthan-Royals.png',
        sport: 'cricket',
        stadium: 'Sawai Mansingh Stadium',
        league: 'IPL',
        country: 'India'
    },
    {
        id: 'team-309',
        name: 'Royal Challengers Bengaluru',
        symbol: 'RCB',
        image: '/images/teams/india/Royal-Challengers-Bengaluru.png',
        sport: 'cricket',
        stadium: 'M. Chinnaswamy Stadium',
        league: 'IPL',
        country: 'India'
    },
    {
        id: 'team-310',
        name: 'Sunrisers Hyderabad',
        symbol: 'SRH',
        image: '/images/teams/india/Sunrisers-Hyderabad.png',
        sport: 'cricket',
        stadium: 'Rajiv Gandhi International Stadium',
        league: 'IPL',
        country: 'India'
    }
];

export const allTeams: Team[] = [
    ...footballTeams,
    ...basketballTeams,
    ...cricketTeams
];
// Add this interface if not already there
export interface LeagueInfo {
    id: string;
    name: string;
    logo: string;
    sport: 'football' | 'basketball' | 'cricket';
}

// Add this constant for league logos
export const leagueLogos: Record<string, string> = {
    'EPL': '/images/leagues/epl-logo.png',
    'LaLiga': '/images/leagues/laliga-logo.png',
    'BundesLiga': '/images/leagues/bundesliga-logo.png',
    'SerieA': '/images/leagues/seriea-logo.png',
    'Ligue1': '/images/leagues/ligue1-logo.png',
    'ChampionsLeague': '/images/leagues/champions-league-logo.png',
    'EuropaLeague': '/images/leagues/europa-league-logo.png',
    'NBA': '/images/leagues/nba-logo.png',
    'EuroLeague': '/images/leagues/euroleague-logo.png',
    'IPL': '/images/leagues/ipl-logo.png',
};

// Add league display names
export const leagueDisplayNames: Record<string, string> = {
    'EPL': 'Premier League',
    'LaLiga': 'La Liga',
    'BundesLiga': 'Bundesliga',
    'SerieA': 'Serie A',
    'Ligue1': 'Ligue 1',
    'ChampionsLeague': 'UEFA Champions League',
    'EuropaLeague': 'UEFA Europa League',
    'NBA': 'National Basketball Association',
    'EuroLeague': 'EuroLeague',
    'IPL': 'Indian Premier League',
};

// Add league descriptions for tooltips
export const leagueDescriptions: Record<string, string> = {
    'EPL': 'English Premier League - Top football league in England',
    'LaLiga': 'Spanish top professional football division',
    'BundesLiga': 'German top professional football league',
    'SerieA': 'Italian top professional football league',
    'Ligue1': 'French top professional football league',
    'ChampionsLeague': 'Premier European club football competition',
    'EuropaLeague': 'Second-tier European club football competition',
    'NBA': 'Professional basketball league in North America',
    'EuroLeague': 'Top-tier European professional basketball competition',
    'IPL': 'Professional Twenty20 cricket league in India',
};

// You can also add league colors if you want consistent styling
export const leagueColors: Record<string, { bg: string, text: string }> = {
    'EPL': { bg: 'bg-red-600', text: 'text-white' },
    'LaLiga': { bg: 'bg-gradient-to-r from-red-500 to-yellow-500', text: 'text-white' },
    'BundesLiga': { bg: 'bg-gradient-to-r from-red-500 to-black', text: 'text-white' },
    'SerieA': { bg: 'bg-gradient-to-r from-green-600 to-white', text: 'text-black' },
    'Ligue1': { bg: 'bg-gradient-to-r from-blue-500 to-red-500', text: 'text-white' },
    'ChampionsLeague': { bg: 'bg-gradient-to-r from-blue-600 to-purple-600', text: 'text-white' },
    'EuropaLeague': { bg: 'bg-gradient-to-r from-orange-500 to-red-500', text: 'text-white' },
    'NBA': { bg: 'bg-gradient-to-r from-red-500 to-blue-500', text: 'text-white' },
    'EuroLeague': { bg: 'bg-gradient-to-r from-red-600 to-blue-600', text: 'text-white' },
    'IPL': { bg: 'bg-gradient-to-r from-purple-600 to-orange-500', text: 'text-white' },
};

export const upcomingMatches: MatchEvent[] = [
    {
        eventId: 'match-001',
        league: 'EPL',
        homeTeam: footballTeams.find(t => t.id === 'team-001')!,
        awayTeam: footballTeams.find(t => t.id === 'team-002')!,
        venue: 'Old Trafford',
        date: '2024-01-15',
        time: '15:00',
        homeWinOdds: 2.50,
        awayWinOdds: 2.80,
        drawOdds: 3.20
    },
    {
        eventId: 'match-002',
        league: 'LaLiga',
        homeTeam: footballTeams.find(t => t.id === 'team-006')!,
        awayTeam: footballTeams.find(t => t.id === 'team-007')!,
        venue: 'Santiago Bernabéu',
        date: '2024-01-16',
        time: '20:00',
        homeWinOdds: 2.10,
        awayWinOdds: 3.00,
        drawOdds: 3.50
    },
    {
        eventId: 'match-003',
        league: 'BundesLiga',
        homeTeam: footballTeams.find(t => t.id === 'team-009')!,
        awayTeam: footballTeams.find(t => t.id === 'team-010')!,
        venue: 'Allianz Arena',
        date: '2024-01-17',
        time: '18:30',
        homeWinOdds: 1.80,
        awayWinOdds: 4.00,
        drawOdds: 3.60
    },
    {
        eventId: 'match-004',
        league: 'ChampionsLeague',
        homeTeam: footballTeams.find(t => t.id === 'team-003')!,
        awayTeam: footballTeams.find(t => t.id === 'team-010')!,
        venue: 'Anfield',
        date: '2024-01-18',
        time: '21:00',
        homeWinOdds: 1.90,
        awayWinOdds: 3.80,
        drawOdds: 3.40
    },
    {
        eventId: 'match-005',
        league: 'NBA',
        homeTeam: basketballTeams.find(t => t.id === 'team-101')!,
        awayTeam: basketballTeams.find(t => t.id === 'team-102')!,
        venue: 'Crypto.com Arena',
        date: '2024-01-19',
        time: '22:30',
        homeWinOdds: 2.20,
        awayWinOdds: 1.80,
        drawOdds: null
    },
    {
        eventId: 'match-006',
        league: 'EPL',
        homeTeam: footballTeams.find(t => t.id === 'team-004')!,
        awayTeam: footballTeams.find(t => t.id === 'team-005')!,
        venue: 'Emirates Stadium',
        date: '2024-01-20',
        time: '17:30',
        homeWinOdds: 2.30,
        awayWinOdds: 3.00,
        drawOdds: 3.10
    },
    {
        eventId: 'match-007',
        league: 'ChampionsLeague',
        homeTeam: footballTeams.find(t => t.id === 'team-059')!,
        awayTeam: footballTeams.find(t => t.id === 'team-006')!,
        venue: 'San Siro',
        date: '2024-01-27',
        time: '20:45',
        homeWinOdds: 3.00,
        awayWinOdds: 2.20,
        drawOdds: 3.40
    },
    {
        eventId: 'match-008',
        league: 'IPL',
        homeTeam: cricketTeams.find(t => t.id === 'team-301')!,
        awayTeam: cricketTeams.find(t => t.id === 'team-306')!,
        venue: 'M. A. Chidambaram Stadium',
        date: '2024-01-26',
        time: '15:30',
        homeWinOdds: 2.10,
        awayWinOdds: 2.80,
        drawOdds: 4.00
    },
    {
        eventId: 'match-009',
        league: 'EuropaLeague',
        homeTeam: footballTeams.find(t => t.id === 'team-024')!,
        awayTeam: footballTeams.find(t => t.id === 'team-049')!,
        venue: 'London Stadium',
        date: '2024-01-29',
        time: '18:00',
        homeWinOdds: 2.10,
        awayWinOdds: 3.40,
        drawOdds: 3.20
    },
    {
        eventId: 'match-010',
        league: 'EuroLeague',
        homeTeam: basketballTeams.find(t => t.id === 'team-201')!,
        awayTeam: basketballTeams.find(t => t.id === 'team-212')!,
        venue: 'WiZink Center',
        date: '2024-01-25',
        time: '19:30',
        homeWinOdds: 1.90,
        awayWinOdds: 2.50,
        drawOdds: null
    }
];

export const casinoGames: CasinoGame[] = [
    {
        id: 'game-001',
        name: 'AI Roulette',
        type: 'table',
        image: '/images/casino/ai-roulette.png',
        description: 'Spin the wheel with AI-predicted outcomes for enhanced excitement.'
    },
    {
        id: 'game-002',
        name: 'Neural Slots',
        type: 'slot',
        image: '/images/casino/neural-slots.png',
        description: 'AI-optimized slot machine with dynamic themes and bonuses.'
    },
    {
        id: 'game-003',
        name: 'Virtual Blackjack',
        type: 'table',
        image: '/images/casino/virtual-blackjack.png',
        description: 'Play against an intelligent AI dealer in this classic card game.'
    },
    {
        id: 'game-004',
        name: 'Quantum Poker',
        type: 'ai',
        image: '/images/casino/quantum-poker.png',
        description: 'AI-driven poker with multiple virtual opponents and strategies.'
    },
    {
        id: 'game-005',
        name: 'Robo Baccarat',
        type: 'table',
        image: '/images/casino/robo-baccarat.png',
        description: 'Fast-paced baccarat powered by AI for accurate and fair play.'
    },
    {
        id: 'game-006',
        name: 'Cyber Craps',
        type: 'table',
        image: '/images/casino/cyber-craps.png',
        description: 'AI-simulated dice game with customizable betting options.'
    },
    {
        id: 'game-007',
        name: 'Machine Learning Keno',
        type: 'ai',
        image: '/images/casino/ml-keno.png',
        description: 'Keno game enhanced with machine learning for better odds prediction.'
    },
    {
        id: 'game-008',
        name: 'AI Sic Bo',
        type: 'table',
        image: '/images/casino/ai-sic-bo.png',
        description: 'Traditional Sic Bo with AI assistance for strategic betting.'
    }
];

// Export matchEvents as alias for upcomingMatches
export const matchEvents = upcomingMatches;
