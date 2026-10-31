// EDIT HERE: shared business details, navigation, services, FAQs, and media.
// Leave media src empty for the designed placeholder, or use /media/your-file.webp.
export const site = {
  name: 'HoliFit',
  description: 'Corporate wellness, fitness and employee engagement for teams in the Philippines.',
  email: 'info@holifit.ph', phone: '(+63) 945-829-1473', phoneHref: '+639458291473',
  address: '11 Floor, Four/ NEO, 4th Avenue, Bonifacio Global City, Taguig, Metro Manila',
  bookingUrl: '', // Your booking provider URL. Empty uses the honest local setup state.
  formEndpoint: '', // Optional approved JSON POST endpoint; see README for contract.
  hero: { src: '/media/hero-placeholder.svg', video: '', alt: 'Employees taking part in a HoliFit wellness activity' },
  story: { src: '/media/story-placeholder.svg', alt: 'A team connecting through a workplace wellness program' },
  logo: { src: '', alt: 'HoliFit' },
  catalog: { src: '/media/catalog-placeholder.svg', alt: 'Pricing catalog cover' },
  videos: {}, // Set keys matching a video section title to local MP4 URLs.
};
// Optional per-page hero overrides. Empty entries inherit site.hero.
export const pageMedia = {
  about: {src:''}, resources: {src:''}, testimonials: {src:''},
};
export const mediaLogos = ['GMA','NET25','INQUIRER','ABS-CBN','CNN','TV PATROL'].map(name=>({name,src:''}));
export const services = [
  { slug: 'corporate-wellness-program-philippines', title: 'Corporate Wellness Programs', short: 'Corporate Wellness', tag: 'THE WHOLE PICTURE', description: 'Build a wellness calendar around your people, your workplace, and the way your team works.', items: ['A connected wellness calendar', 'Physical, mental and social well-being', 'Support with program coordination'] },
  { slug: 'fitness-classes-philippines', title: 'Fitness Coaching', short: 'Fitness Classes', tag: 'MOVE TOGETHER', description: 'Make movement part of the working week with group sessions that bring a little more energy to your team.', items: ['Zumba and dance fitness', 'Yoga and mobility', 'HIIT and strength sessions'] },
  { slug: 'webinar-philippines', title: 'Workplace Well-Being Talks & Webinars', short: 'Webinars', tag: 'LEARN TO FEEL BETTER', description: 'Give your people practical ideas for healthier working days, delivered through engaging conversations.', items: ['Stress and everyday resilience', 'Nutrition and healthy habits', 'Financial well-being and ergonomics'] },
  { slug: 'mental-health-program-philippines', title: 'Mental Health Services', short: 'Mental Health', tag: 'CARE BEYOND THE PHYSICAL', description: 'Create space for conversations about mental well-being and explore support suited to your organization.', items: ['Workplace awareness sessions', 'Manager education', 'Program planning and support'] },
  { slug: 'team-building-philippines', title: 'Team Building', short: 'Team Building', tag: 'BETTER, TOGETHER', description: 'Step away from the everyday and give your team time to reconnect through shared challenges and experiences.', items: ['Facilitated team activities', 'On-site and virtual formats', 'Planning and event coordination'] },
  { slug: 'sports-fest-in-the-philippines', title: 'Sports Fest', short: 'Sports Fest', tag: 'BRING YOUR TEAM SPIRIT', description: 'Turn friendly competition into a day of connection, movement, and moments your team can share.', items: ['Company sports events', 'Team games and activities', 'Event coordination'] },
  { slug: 'fun-run-philippines', title: 'Company Fun Run', short: 'Fun Run', tag: 'FIND YOUR STRIDE', description: 'Bring colleagues together for an active event with a shared finish line.', items: ['Company running events', 'Inclusive activity planning', 'Event-day coordination'] },
  { slug: 'corporate-gym-management-philippines', title: 'Corporate Gym Management', short: 'Gym Management', tag: 'MAKE SPACE FOR MOVEMENT', description: 'Help your workplace gym become a welcoming part of your employees’ daily routine.', items: ['Gym operations support', 'Coaching and programming', 'Equipment maintenance coordination'] },
  { slug: 'office-rr-faq', title: 'Office R&R', short: 'Office R&R', tag: 'A MOMENT TO RECHARGE', description: 'Bring a welcome pause to the office with activities centered on rest and reconnection.', items: ['Workplace wellness sessions', 'Team relaxation activities', 'Flexible event planning'] },
].map(s => ({ ...s, media: { src: `/media/${s.slug}-placeholder.svg`, alt: `${s.short} with a corporate team` } }));
export const navigation = [
  ['Home', '/'], ['About', '/about/'], ['Testimonials', '/testimonials/'],
  ['Blog', '/blog/'], ['Resources', '/resources/'], ['Contact', '/contact-us/'],
];
export const clientLogos = ['JOLLIBEE','GCASH','SHOPEE','CANVA','MANULIFE','MAXICARE','AXA','AON','SM','AYALA','IBM','AMAZON','CITI','J.P. MORGAN','ePLDT','SMART','SUN LIFE','COLGATE','McDONALD’S','PEPSICO','L’ORÉAL','TELEPERFORMANCE','GMA','ABS-CBN'].map(name=>({name,src:''}));
export const faqs = [
  ['How do we choose the right program?', 'Start with your team’s priorities. Share your headcount, preferred format and goals during a consultation so the conversation can focus on the activities that fit.'],
  ['Can activities be held online or in person?', 'Program formats vary by service. Ask about on-site, virtual and hybrid options when planning your team’s calendar.'],
  ['Can we combine different services?', 'Yes. Explore a calendar that brings movement, learning and team connection together, or begin with a single activity.'],
  ['What should we prepare before a consultation?', 'Bring an approximate headcount, your location, target dates and the main challenges you want the program to address.'],
  ['How can we request pricing?', 'Use the contact page to outline your requirements. Scope, frequency, location and service selection help shape a proposal.'],
];
// Replace these editorial placeholders with approved, attributable client testimonials.
export const testimonials = [
  { quote: 'Add an approved client quote about the experience of running a wellness program.', name: 'Client name', role: 'Role · Company', src: '' },
  { quote: 'Add an approved client quote about participation, coaching, or team connection.', name: 'Client name', role: 'Role · Company', src: '' },
];
export const resources = [
  { title: 'Wellness audits', description: 'Add your workplace well-being assessments and interactive tools.', href: '', kind: 'AUDIT' },
  { title: 'Calculators', description: 'Connect your approved wellness calculators and planning tools.', href: '', kind: 'TOOLS' },
  { title: 'Guides & downloads', description: 'Upload your guides, program planners and pricing catalog.', href: '', kind: 'DOWNLOADS' },
];
