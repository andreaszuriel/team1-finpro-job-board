// Mock data for skill assessment system
export interface SkillCategoryData {
  id: string;
  name: string;
  description: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
}

export interface SkillAssessmentQuestionData {
  id: string;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
  createdAt: string;
  updatedAt: string;
}

export interface SkillAssessmentData {
  id: string;
  title: string;
  description: string;
  passingScore: number;
  timeLimit: number;
  isActive: boolean;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  questions: SkillAssessmentQuestionData[];
}

export interface UserSkillAssessmentData {
  id: string;
  score: number;
  isPassed: boolean;
  completedAt: string;
  timeSpent: number;
  badgeEarned: boolean;
  badgeIssuedAt: string | null;
  userId: string;
  assessmentId: string;
}

// Skill Categories
export const skillCategories: SkillCategoryData[] = [
  {
    id: 'cat_english_comp',
    name: 'English Comprehension',
    description: 'Assess reading comprehension, grammar, vocabulary, and written communication skills',
    icon: '📚',
    createdAt: '2024-01-15T08:00:00.000Z',
    updatedAt: '2024-01-15T08:00:00.000Z',
  },
  {
    id: 'cat_mathematics',
    name: 'Mathematics',
    description: 'Evaluate mathematical reasoning, problem-solving, and quantitative analysis skills',
    icon: '🔢',
    createdAt: '2024-01-15T08:00:00.000Z',
    updatedAt: '2024-01-15T08:00:00.000Z',
  },
];

// English Comprehension Questions
export const englishQuestions: SkillAssessmentQuestionData[] = [
  {
    id: 'eq_001',
    question: 'Which of the following sentences is grammatically correct?',
    optionA: 'She don\'t like coffee.',
    optionB: 'She doesn\'t like coffee.',
    optionC: 'She not like coffee.',
    optionD: 'She no like coffee.',
    correctAnswer: 'B',
    explanation: 'The correct form uses "doesn\'t" (does not) with the third person singular "she".',
    createdAt: '2024-01-15T09:00:00.000Z',
    updatedAt: '2024-01-15T09:00:00.000Z',
  },
  {
    id: 'eq_002',
    question: 'What is the meaning of the word "ubiquitous"?',
    optionA: 'Rare and uncommon',
    optionB: 'Present everywhere',
    optionC: 'Extremely large',
    optionD: 'Very expensive',
    correctAnswer: 'B',
    explanation: 'Ubiquitous means present, appearing, or found everywhere.',
    createdAt: '2024-01-15T09:01:00.000Z',
    updatedAt: '2024-01-15T09:01:00.000Z',
  },
  {
    id: 'eq_003',
    question: 'Read the passage: "The company\'s profits soared after implementing the new strategy." What does "soared" mean in this context?',
    optionA: 'Decreased rapidly',
    optionB: 'Remained stable',
    optionC: 'Increased dramatically',
    optionD: 'Fluctuated wildly',
    correctAnswer: 'C',
    explanation: 'In this context, "soared" means increased dramatically or rose rapidly.',
    createdAt: '2024-01-15T09:02:00.000Z',
    updatedAt: '2024-01-15T09:02:00.000Z',
  },
  {
    id: 'eq_004',
    question: 'Which word best completes the sentence: "The detective\'s investigation was _____ and thorough."',
    optionA: 'meticulous',
    optionB: 'careless',
    optionC: 'hasty',
    optionD: 'superficial',
    correctAnswer: 'A',
    explanation: 'Meticulous means showing great attention to detail, which pairs well with "thorough".',
    createdAt: '2024-01-15T09:03:00.000Z',
    updatedAt: '2024-01-15T09:03:00.000Z',
  },
  {
    id: 'eq_005',
    question: 'Identify the sentence with the correct use of apostrophes:',
    optionA: 'The cat\'s are playing in the garden.',
    optionB: 'The cats\' toys are scattered everywhere.',
    optionC: 'Its a beautiful day today.',
    optionD: 'Who\'s book is this?',
    correctAnswer: 'B',
    explanation: 'The apostrophe in "cats\'" correctly shows possession by multiple cats.',
    createdAt: '2024-01-15T09:04:00.000Z',
    updatedAt: '2024-01-15T09:04:00.000Z',
  },
  {
    id: 'eq_006',
    question: 'What is the antonym of "meticulous"?',
    optionA: 'Careful',
    optionB: 'Precise',
    optionC: 'Careless',
    optionD: 'Detailed',
    correctAnswer: 'C',
    explanation: 'Careless is the opposite of meticulous, which means extremely careful and precise.',
    createdAt: '2024-01-15T09:05:00.000Z',
    updatedAt: '2024-01-15T09:05:00.000Z',
  },
  {
    id: 'eq_007',
    question: 'Which sentence uses the passive voice correctly?',
    optionA: 'The report was written by the team.',
    optionB: 'The team wrote the report.',
    optionC: 'Writing the report, the team worked hard.',
    optionD: 'The team is writing the report.',
    correctAnswer: 'A',
    explanation: 'Passive voice uses "was/were + past participle" construction. "Was written" is correct passive voice.',
    createdAt: '2024-01-15T09:06:00.000Z',
    updatedAt: '2024-01-15T09:06:00.000Z',
  },
  {
    id: 'eq_008',
    question: 'Choose the correct spelling:',
    optionA: 'Occurance',
    optionB: 'Occurence',
    optionC: 'Occurrence',
    optionD: 'Occurrance',
    correctAnswer: 'C',
    explanation: 'The correct spelling is "occurrence" with double "c" and double "r".',
    createdAt: '2024-01-15T09:07:00.000Z',
    updatedAt: '2024-01-15T09:07:00.000Z',
  },
  {
    id: 'eq_009',
    question: 'What type of literary device is used in "The wind whispered through the trees"?',
    optionA: 'Metaphor',
    optionB: 'Personification',
    optionC: 'Simile',
    optionD: 'Alliteration',
    correctAnswer: 'B',
    explanation: 'Personification gives human characteristics (whispering) to non-human things (wind).',
    createdAt: '2024-01-15T09:08:00.000Z',
    updatedAt: '2024-01-15T09:08:00.000Z',
  },
  {
    id: 'eq_010',
    question: 'Which word is a synonym for "ameliorate"?',
    optionA: 'Worsen',
    optionB: 'Improve',
    optionC: 'Maintain',
    optionD: 'Destroy',
    correctAnswer: 'B',
    explanation: 'Ameliorate means to make better or improve something.',
    createdAt: '2024-01-15T09:09:00.000Z',
    updatedAt: '2024-01-15T09:09:00.000Z',
  },
  {
    id: 'eq_011',
    question: 'In the sentence "Neither the students nor the teacher was present," why is "was" correct?',
    optionA: 'Because "neither" is singular',
    optionB: 'Because "teacher" is singular and closer to the verb',
    optionC: 'Because "students" is plural',
    optionD: 'Because it\'s a fixed expression',
    correctAnswer: 'B',
    explanation: 'In "neither...nor" constructions, the verb agrees with the subject closest to it. "Teacher" is singular.',
    createdAt: '2024-01-15T09:10:00.000Z',
    updatedAt: '2024-01-15T09:10:00.000Z',
  },
  {
    id: 'eq_012',
    question: 'What is the meaning of the idiom "break the ice"?',
    optionA: 'To cause damage',
    optionB: 'To start a conversation',
    optionC: 'To stop working',
    optionD: 'To make someone angry',
    correctAnswer: 'B',
    explanation: '"Break the ice" means to initiate conversation or overcome initial social awkwardness.',
    createdAt: '2024-01-15T09:11:00.000Z',
    updatedAt: '2024-01-15T09:11:00.000Z',
  },
  {
    id: 'eq_013',
    question: 'Which sentence demonstrates proper parallel structure?',
    optionA: 'She likes reading, writing, and to paint.',
    optionB: 'She likes reading, writing, and painting.',
    optionC: 'She likes to read, writing, and painting.',
    optionD: 'She likes reading, to write, and painting.',
    correctAnswer: 'B',
    explanation: 'Parallel structure requires the same grammatical form. All three activities use gerunds (-ing forms).',
    createdAt: '2024-01-15T09:12:00.000Z',
    updatedAt: '2024-01-15T09:12:00.000Z',
  },
  {
    id: 'eq_014',
    question: 'What is the correct comparative form of "good"?',
    optionA: 'Gooder',
    optionB: 'More good',
    optionC: 'Better',
    optionD: 'Best',
    correctAnswer: 'C',
    explanation: 'The comparative form of "good" is "better" (irregular comparison).',
    createdAt: '2024-01-15T09:13:00.000Z',
    updatedAt: '2024-01-15T09:13:00.000Z',
  },
  {
    id: 'eq_015',
    question: 'Which punctuation mark is missing in this sentence: "However the weather was nice"?',
    optionA: 'Period after "However"',
    optionB: 'Comma after "However"',
    optionC: 'Semicolon after "However"',
    optionD: 'Exclamation mark after "However"',
    correctAnswer: 'B',
    explanation: 'Introductory words like "However" should be followed by a comma.',
    createdAt: '2024-01-15T09:14:00.000Z',
    updatedAt: '2024-01-15T09:14:00.000Z',
  },
  {
    id: 'eq_016',
    question: 'What is the meaning of "cogent" in academic writing?',
    optionA: 'Confusing and unclear',
    optionB: 'Clear and convincing',
    optionC: 'Lengthy and detailed',
    optionD: 'Simple and basic',
    correctAnswer: 'B',
    explanation: 'Cogent means clear, logical, and convincing in argumentation.',
    createdAt: '2024-01-15T09:15:00.000Z',
    updatedAt: '2024-01-15T09:15:00.000Z',
  },
  {
    id: 'eq_017',
    question: 'Identify the dependent clause in: "Although it was raining, we went for a walk."',
    optionA: 'Although it was raining',
    optionB: 'we went for a walk',
    optionC: 'it was raining',
    optionD: 'we went',
    correctAnswer: 'A',
    explanation: 'A dependent clause begins with a subordinating conjunction like "although" and cannot stand alone.',
    createdAt: '2024-01-15T09:16:00.000Z',
    updatedAt: '2024-01-15T09:16:00.000Z',
  },
  {
    id: 'eq_018',
    question: 'Which word correctly completes: "The data _____ conclusive evidence."',
    optionA: 'provide',
    optionB: 'provides',
    optionC: 'are providing',
    optionD: 'were providing',
    correctAnswer: 'A',
    explanation: '"Data" is plural, so it requires the plural verb form "provide".',
    createdAt: '2024-01-15T09:17:00.000Z',
    updatedAt: '2024-01-15T09:17:00.000Z',
  },
  {
    id: 'eq_019',
    question: 'What does "empirical" mean in research contexts?',
    optionA: 'Based on theory only',
    optionB: 'Based on observation and experience',
    optionC: 'Based on assumptions',
    optionD: 'Based on opinions',
    correctAnswer: 'B',
    explanation: 'Empirical refers to knowledge derived from observation, experience, and experimentation.',
    createdAt: '2024-01-15T09:18:00.000Z',
    updatedAt: '2024-01-15T09:18:00.000Z',
  },
  {
    id: 'eq_020',
    question: 'Choose the sentence with correct subject-verb agreement:',
    optionA: 'The group of students are studying.',
    optionB: 'The group of students is studying.',
    optionC: 'The group of students were studying.',
    optionD: 'The group of students have studying.',
    correctAnswer: 'B',
    explanation: 'The subject is "group" (singular), not "students", so the verb should be singular "is".',
    createdAt: '2024-01-15T09:19:00.000Z',
    updatedAt: '2024-01-15T09:19:00.000Z',
  },
  {
    id: 'eq_021',
    question: 'What is the correct way to cite a direct quote in formal writing?',
    optionA: 'According to Smith, innovation is key.',
    optionB: 'Smith said that "innovation is key".',
    optionC: 'Smith stated, "Innovation is key" (2023).',
    optionD: 'Innovation is key - Smith',
    correctAnswer: 'C',
    explanation: 'Direct quotes should be in quotation marks with proper attribution and citation.',
    createdAt: '2024-01-15T09:20:00.000Z',
    updatedAt: '2024-01-15T09:20:00.000Z',
  },
  {
    id: 'eq_022',
    question: 'Which transition word best shows contrast?',
    optionA: 'Furthermore',
    optionB: 'Similarly',
    optionC: 'However',
    optionD: 'Additionally',
    correctAnswer: 'C',
    explanation: '"However" is a transition word that introduces a contrasting or opposing idea.',
    createdAt: '2024-01-15T09:21:00.000Z',
    updatedAt: '2024-01-15T09:21:00.000Z',
  },
  {
    id: 'eq_023',
    question: 'What is the plural form of "analysis"?',
    optionA: 'Analysises',
    optionB: 'Analyses',
    optionC: 'Analysis',
    optionD: 'Analyzes',
    correctAnswer: 'B',
    explanation: 'The plural of "analysis" follows the Greek pattern: "analyses" (pronounced an-AL-i-seez).',
    createdAt: '2024-01-15T09:22:00.000Z',
    updatedAt: '2024-01-15T09:22:00.000Z',
  },
  {
    id: 'eq_024',
    question: 'In formal writing, which pronoun should be used: "Between you and ___"?',
    optionA: 'I',
    optionB: 'me',
    optionC: 'myself',
    optionD: 'mine',
    correctAnswer: 'B',
    explanation: 'After prepositions like "between", use object pronouns. "Me" is the object form of "I".',
    createdAt: '2024-01-15T09:23:00.000Z',
    updatedAt: '2024-01-15T09:23:00.000Z',
  },
  {
    id: 'eq_025',
    question: 'What does "synthesize" mean in academic contexts?',
    optionA: 'To copy information exactly',
    optionB: 'To combine ideas from multiple sources',
    optionC: 'To reject all previous research',
    optionD: 'To create artificial materials',
    correctAnswer: 'B',
    explanation: 'In academic writing, synthesize means to combine information and ideas from multiple sources into a coherent whole.',
    createdAt: '2024-01-15T09:24:00.000Z',
    updatedAt: '2024-01-15T09:24:00.000Z',
  },
];

// Mathematics Questions
export const mathematicsQuestions: SkillAssessmentQuestionData[] = [
  {
    id: 'mq_001',
    question: 'What is 15% of 240?',
    optionA: '36',
    optionB: '35',
    optionC: '40',
    optionD: '32',
    correctAnswer: 'A',
    explanation: '15% of 240 = 0.15 × 240 = 36',
    createdAt: '2024-01-15T10:00:00.000Z',
    updatedAt: '2024-01-15T10:00:00.000Z',
  },
  {
    id: 'mq_002',
    question: 'If x + 5 = 12, what is the value of x?',
    optionA: '7',
    optionB: '17',
    optionC: '6',
    optionD: '8',
    correctAnswer: 'A',
    explanation: 'x + 5 = 12, so x = 12 - 5 = 7',
    createdAt: '2024-01-15T10:01:00.000Z',
    updatedAt: '2024-01-15T10:01:00.000Z',
  },
  {
    id: 'mq_003',
    question: 'What is the area of a rectangle with length 8 cm and width 6 cm?',
    optionA: '48 cm²',
    optionB: '28 cm²',
    optionC: '14 cm²',
    optionD: '42 cm²',
    correctAnswer: 'A',
    explanation: 'Area of rectangle = length × width = 8 × 6 = 48 cm²',
    createdAt: '2024-01-15T10:02:00.000Z',
    updatedAt: '2024-01-15T10:02:00.000Z',
  },
  {
    id: 'mq_004',
    question: 'Which of the following is a prime number?',
    optionA: '15',
    optionB: '21',
    optionC: '17',
    optionD: '25',
    correctAnswer: 'C',
    explanation: '17 is prime because it has only two factors: 1 and 17',
    createdAt: '2024-01-15T10:03:00.000Z',
    updatedAt: '2024-01-15T10:03:00.000Z',
  },
  {
    id: 'mq_005',
    question: 'What is the value of 2³ + 3²?',
    optionA: '17',
    optionB: '13',
    optionC: '15',
    optionD: '19',
    correctAnswer: 'A',
    explanation: '2³ = 8 and 3² = 9, so 8 + 9 = 17',
    createdAt: '2024-01-15T10:04:00.000Z',
    updatedAt: '2024-01-15T10:04:00.000Z',
  },
  {
    id: 'mq_006',
    question: 'If a train travels 120 km in 2 hours, what is its speed in km/h?',
    optionA: '60 km/h',
    optionB: '240 km/h',
    optionC: '80 km/h',
    optionD: '40 km/h',
    correctAnswer: 'A',
    explanation: 'Speed = Distance ÷ Time = 120 ÷ 2 = 60 km/h',
    createdAt: '2024-01-15T10:05:00.000Z',
    updatedAt: '2024-01-15T10:05:00.000Z',
  },
  {
    id: 'mq_007',
    question: 'What is the median of the numbers: 3, 7, 2, 9, 5?',
    optionA: '5',
    optionB: '7',
    optionC: '3',
    optionD: '6',
    correctAnswer: 'A',
    explanation: 'First sort: 2, 3, 5, 7, 9. The median (middle value) is 5',
    createdAt: '2024-01-15T10:06:00.000Z',
    updatedAt: '2024-01-15T10:06:00.000Z',
  },
  {
    id: 'mq_008',
    question: 'Solve for y: 3y - 6 = 15',
    optionA: '7',
    optionB: '5',
    optionC: '9',
    optionD: '3',
    correctAnswer: 'A',
    explanation: '3y - 6 = 15, so 3y = 21, therefore y = 7',
    createdAt: '2024-01-15T10:07:00.000Z',
    updatedAt: '2024-01-15T10:07:00.000Z',
  },
  {
    id: 'mq_009',
    question: 'What is the circumference of a circle with radius 7 cm? (Use π ≈ 3.14)',
    optionA: '43.96 cm',
    optionB: '21.98 cm',
    optionC: '49 cm',
    optionD: '14 cm',
    correctAnswer: 'A',
    explanation: 'Circumference = 2πr = 2 × 3.14 × 7 = 43.96 cm',
    createdAt: '2024-01-15T10:08:00.000Z',
    updatedAt: '2024-01-15T10:08:00.000Z',
  },
  {
    id: 'mq_010',
    question: 'What is 3/4 expressed as a decimal?',
    optionA: '0.75',
    optionB: '0.34',
    optionC: '0.43',
    optionD: '0.67',
    correctAnswer: 'A',
    explanation: '3 ÷ 4 = 0.75',
    createdAt: '2024-01-15T10:09:00.000Z',
    updatedAt: '2024-01-15T10:09:00.000Z',
  },
  {
    id: 'mq_011',
    question: 'If the probability of rain is 0.3, what is the probability it will NOT rain?',
    optionA: '0.7',
    optionB: '0.3',
    optionC: '1.3',
    optionD: '0.6',
    correctAnswer: 'A',
    explanation: 'P(not rain) = 1 - P(rain) = 1 - 0.3 = 0.7',
    createdAt: '2024-01-15T10:10:00.000Z',
    updatedAt: '2024-01-15T10:10:00.000Z',
  },
  {
    id: 'mq_012',
    question: 'What is the slope of a line passing through points (2, 3) and (6, 7)?',
    optionA: '1',
    optionB: '2',
    optionC: '0.5',
    optionD: '4',
    correctAnswer: 'A',
    explanation: 'Slope = (y₂ - y₁)/(x₂ - x₁) = (7 - 3)/(6 - 2) = 4/4 = 1',
    createdAt: '2024-01-15T10:11:00.000Z',
    updatedAt: '2024-01-15T10:11:00.000Z',
  },
  {
    id: 'mq_013',
    question: 'What is the square root of 144?',
    optionA: '12',
    optionB: '14',
    optionC: '11',
    optionD: '13',
    correctAnswer: 'A',
    explanation: '√144 = 12, because 12 × 12 = 144',
    createdAt: '2024-01-15T10:12:00.000Z',
    updatedAt: '2024-01-15T10:12:00.000Z',
  },
  {
    id: 'mq_014',
    question: 'If a = 4 and b = 3, what is the value of a² + b²?',
    optionA: '25',
    optionB: '49',
    optionC: '7',
    optionD: '12',
    correctAnswer: 'A',
    explanation: 'a² + b² = 4² + 3² = 16 + 9 = 25',
    createdAt: '2024-01-15T10:13:00.000Z',
    updatedAt: '2024-01-15T10:13:00.000Z',
  },
  {
    id: 'mq_015',
    question: 'What is 40% of 80?',
    optionA: '32',
    optionB: '36',
    optionC: '28',
    optionD: '40',
    correctAnswer: 'A',
    explanation: '40% of 80 = 0.40 × 80 = 32',
    createdAt: '2024-01-15T10:14:00.000Z',
    updatedAt: '2024-01-15T10:14:00.000Z',
  },
  {
    id: 'mq_016',
    question: 'What is the volume of a cube with side length 4 cm?',
    optionA: '64 cm³',
    optionB: '16 cm³',
    optionC: '48 cm³',
    optionD: '12 cm³',
    correctAnswer: 'A',
    explanation: 'Volume of cube = side³ = 4³ = 64 cm³',
    createdAt: '2024-01-15T10:15:00.000Z',
    updatedAt: '2024-01-15T10:15:00.000Z',
  },
  {
    id: 'mq_017',
    question: 'What is the mean (average) of: 10, 15, 20, 25?',
    optionA: '17.5',
    optionB: '15',
    optionC: '20',
    optionD: '18',
    correctAnswer: 'A',
    explanation: 'Mean = (10 + 15 + 20 + 25) ÷ 4 = 70 ÷ 4 = 17.5',
    createdAt: '2024-01-15T10:16:00.000Z',
    updatedAt: '2024-01-15T10:16:00.000Z',
  },
  {
    id: 'mq_018',
    question: 'Simplify: 2(x + 3) + 4x',
    optionA: '6x + 6',
    optionB: '6x + 3',
    optionC: '2x + 6',
    optionD: '6x + 12',
    correctAnswer: 'A',
    explanation: '2(x + 3) + 4x = 2x + 6 + 4x = 6x + 6',
    createdAt: '2024-01-15T10:17:00.000Z',
    updatedAt: '2024-01-15T10:17:00.000Z',
  },
{
    id: 'mq_019',
    question: 'What is 2/3 + 1/4?',
    optionA: '11/12',
    optionB: '3/7',
    optionC: '8/12',
    optionD: '5/6',
    correctAnswer: 'A',
    explanation: '2/3 + 1/4 = 8/12 + 3/12 = 11/12',
    createdAt: '2024-01-15T10:18:00.000Z',
    updatedAt: '2024-01-15T10:18:00.000Z',
  },
  {
    id: 'mq_020',
    question: 'If 3x + 7 = 22, what is the value of x?',
    optionA: '5',
    optionB: '7',
    optionC: '4',
    optionD: '6',
    correctAnswer: 'A',
    explanation: '3x + 7 = 22, so 3x = 15, therefore x = 5',
    createdAt: '2024-01-15T10:19:00.000Z',
    updatedAt: '2024-01-15T10:19:00.000Z',
  },
  {
    id: 'mq_021',
    question: 'What is the area of a triangle with base 10 cm and height 6 cm?',
    optionA: '30 cm²',
    optionB: '60 cm²',
    optionC: '16 cm²',
    optionD: '32 cm²',
    correctAnswer: 'A',
    explanation: 'Area of triangle = (1/2) × base × height = (1/2) × 10 × 6 = 30 cm²',
    createdAt: '2024-01-15T10:20:00.000Z',
    updatedAt: '2024-01-15T10:20:00.000Z',
  },
  {
    id: 'mq_022',
    question: 'What is 125% expressed as a decimal?',
    optionA: '1.25',
    optionB: '12.5',
    optionC: '0.125',
    optionD: '2.5',
    correctAnswer: 'A',
    explanation: '125% = 125/100 = 1.25',
    createdAt: '2024-01-15T10:21:00.000Z',
    updatedAt: '2024-01-15T10:21:00.000Z',
  },
  {
    id: 'mq_023',
    question: 'What is the next number in the sequence: 2, 6, 18, 54, ?',
    optionA: '162',
    optionB: '108',
    optionC: '72',
    optionD: '216',
    correctAnswer: 'A',
    explanation: 'Each number is multiplied by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162',
    createdAt: '2024-01-15T10:22:00.000Z',
    updatedAt: '2024-01-15T10:22:00.000Z',
  },
  {
    id: 'mq_024',
    question: 'If a rectangle has a perimeter of 24 cm and width of 4 cm, what is its length?',
    optionA: '8 cm',
    optionB: '10 cm',
    optionC: '6 cm',
    optionD: '12 cm',
    correctAnswer: 'A',
    explanation: 'Perimeter = 2(length + width), so 24 = 2(length + 4), length + 4 = 12, length = 8 cm',
    createdAt: '2024-01-15T10:23:00.000Z',
    updatedAt: '2024-01-15T10:23:00.000Z',
  },
  {
    id: 'mq_025',
    question: 'What is the value of (-3)² + (-2)³?',
    optionA: '1',
    optionB: '17',
    optionC: '-1',
    optionD: '7',
    correctAnswer: 'A',
    explanation: '(-3)² = 9 and (-2)³ = -8, so 9 + (-8) = 1',
    createdAt: '2024-01-15T10:24:00.000Z',
    updatedAt: '2024-01-15T10:24:00.000Z',
  }
  ];