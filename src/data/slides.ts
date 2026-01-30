import type { Part } from '@/types';

export const parts: Part[] = [
  {
    id: 'part1',
    title: 'Part 1: Introduction to Yachting',
    description: 'Foundation - Industry overview, yacht definitions, and operations',
    slides: [
      {
        id: 'slide1',
        slideNumber: 'SLIDE 1',
        sectionTitle: 'UNIT COVER',
        headline: 'Unit 23: Introduction to Yachting Specifications',
        voIntent: 'Professional welcome; setting the stage for a career at sea.',
        interaction: 'Start Unit button',
        imagePlaceholder: 'Hero image of luxury superyacht with crew on deck',
        assessment: null,
        voiceoverScript: 'Welcome to Unit 23. This comprehensive module will introduce you to the exciting world of yachting, covering everything from industry fundamentals to safety protocols. Whether you\'re new to maritime careers or looking to expand your knowledge, this unit provides essential foundations for success in the superyacht industry.',
        content: `## Welcome to Your Yachting Career Journey

This unit provides comprehensive training for anyone seeking to begin or advance their career in the luxury yachting industry. You'll learn about the unique aspects of life at sea, professional standards, and the essential knowledge required to excel as yacht crew.

### What You'll Learn:
- Industry demographics and career opportunities
- Yacht types and operational differences
- Professional departments and hierarchy
- Communication protocols and safety procedures
- Cultural awareness for international guests
- Maritime law and safety regulations

### Course Certification:
This DNV-certified course meets international standards for yacht crew training and is recognized throughout the maritime industry.`,
        part: 'part1'
      },
      {
        id: 'slide2',
        slideNumber: 'SLIDE 2',
        sectionTitle: 'Why This Unit Matters',
        headline: 'The Demographics & Perks of Yachting',
        voIntent: 'Highlighting the unique industry scale and career opportunities.',
        interaction: 'Animated data reveal (8,000+ superyachts, 160k+ crew)',
        imagePlaceholder: 'Infographic showing yacht industry statistics',
        assessment: 'Multiple Choice: How many superyachts are currently operating worldwide?\nA) 3,000-4,000\nB) 5,000-6,000\nC) 8,000+\nD) 12,000+',
        voiceoverScript: 'The superyacht industry represents one of the most unique and rewarding career paths available. With over 8,000 superyachts operating globally and employing approximately 148,000 to 163,000 crew members, this industry offers exceptional opportunities for travel, professional growth, and financial rewards. Annual production continues at approximately 150 new vessels per year.',
        content: `## The Superyacht Industry at a Glance

### Industry Scale:
- **8,000+** superyachts currently operating worldwide
- **148,000-163,000** crew members employed globally
- **150** new vessels produced annually
- Industry growth continues year over year

### Career Perks:
- **Travel Opportunities**: Visit the world's most beautiful and remote destinations
- **Financial Benefits**: Above-average salaries with minimal living expenses
- **Tax Advantages**: Many positions offer favorable tax situations
- **Professional Growth**: Clear career progression paths
- **Unique Lifestyle**: Experience life at sea unlike any other profession

### Why Choose Yachting?
The superyacht industry has gained tremendous popularity over the past decades, with larger vessels being built and more people seeking roles as crew onboard luxury vessels. Unlike other professions, yachting means nearly all your expenses are covered—accommodation, meals, and utilities—allowing you to save a significant portion of your income.

> "Around the world, more and more individuals are choosing to set off to a life at sea and start their career in the yachting industry. There are many perks to a career in this industry, namely the ability to travel to some of the most remote parts of the world while earning an above average salary with close to no living expenses."`,
        part: 'part1'
      },
      {
        id: 'slide3',
        slideNumber: 'SLIDE 3',
        sectionTitle: 'Defining the Yacht',
        headline: 'What is a Superyacht?',
        voIntent: 'Establishing technical definitions and historical origins.',
        interaction: 'Click-to-reveal (Definition vs. Megayacht vs. Superyacht)',
        imagePlaceholder: 'Size comparison chart showing different yacht classifications',
        assessment: 'Matching Exercise: Match each yacht type to its size classification:\n- Super Yacht: Over 34M (100ft)\n- Mega Yacht: Over 70M (200ft)\n- Motor Yacht: Engine-powered vessel\n- Sailing Yacht: Wind-powered vessel',
        voiceoverScript: 'The term \'yacht\' originates from the Dutch word \'jacht,\' meaning to hunt or pursue. Originally lightweight chasing vessels used by coastal authorities, yachts evolved into recreational craft. Today, a Superyacht is defined as an extremely luxurious sailing or motor-powered vessel, typically larger than 24 meters, owned by high net-worth individuals.',
        content: `## Yacht Definitions and Classifications

### Historical Origins:
The term **'yacht'** comes from the Dutch word **'jacht'** meaning "to hunt or pursue." Originally, yachts were lightweight chasing vessels used predominantly by authorities in coastal towns. They were later used for recreational races and eventually evolved into the luxury vessels we know today.

### Modern Definition:
> "Any watercraft which features accommodation and is used solely for pleasure, be it leisure or races or even a getaway."

### Yacht Size Classifications:

| Type | Size | Description |
|------|------|-------------|
| **Super Yacht** | Over 34m (100ft) | Large luxury vessels |
| **Mega Yacht** | Over 70m (200ft) | Ultra-large luxury vessels |
| **Motor Yacht** | Varies | Engine-powered propulsion |
| **Sailing Yacht** | Varies | Wind-powered vessels |

### What is a Superyacht?
A Superyacht is an extremely luxurious sailing or motor-powered vessel, usually larger than 24m, owned by a wealthy, high net-worth individual. These vessels represent the pinnacle of maritime luxury and require highly trained professional crew to operate.

### Flag States:
Each Superyacht has a flag state where it is registered. Common flag state registrars include:
- Cayman Islands
- Marshall Islands
- Malta
- Isle of Man
- British Virgin Islands (BVI)

> "In yachting, size does matter, and although not determinative for the level of luxury a type of yacht is, the overall length clearly establishes differentiation."`,
        part: 'part1'
      },
      {
        id: 'slide4',
        slideNumber: 'SLIDE 4',
        sectionTitle: 'Private vs. Charter',
        headline: 'Private and Charter Operations',
        voIntent: 'Differentiating between owner-only and commercial guest services.',
        interaction: 'Side-by-side comparison table',
        imagePlaceholder: 'Split screen showing private yacht vs. charter yacht operations',
        assessment: 'True/False Quiz:\n1. Charter yachts may carry more than 12 passengers. (False)\n2. Private yachts do not carry passenger restrictions. (True)\n3. Charter contracts include an APA for operating costs. (True)',
        voiceoverScript: 'Understanding the distinction between private and charter operations is crucial for crew members. Private yachts serve solely the owner and their guests with a personal touch, while charter yachts operate commercially with up to 12 passengers, requiring extremely high levels of customized service and professional etiquette.',
        content: `## Yacht Operation Types

### PRIVATE YACHTS
**Definition:** Solely for the pleasure of the owner and guests; do not carry passenger restrictions.

**Key Characteristics:**
- Used exclusively by the owner and their invited guests
- May occasionally be used for business meetings or functions
- More personal touch depending on owner preferences
- Gratitude tips may or may not be given (depends on guests)
- Crew get to know the owner's specific preferences over time

**Crew Considerations:**
- Build long-term relationships with the owner
- Learn specific owner preferences and routines
- Often more stable work environment
- May travel to owner's preferred destinations

---

### CHARTER (COMMERCIAL) YACHTS
**Definition:** Commercially operated vessels that may carry no more than 12 passengers.

**Key Characteristics:**
- Chartered for a specific price per day or week
- Booked through charter agents or management companies
- **APA (Advance Provisioning Allowance)** included in contracts—a deposit covering food, fuel, and berthing
- Extremely high level of customized service required
- Must adapt to each unique charter guest's needs

**Crew Considerations:**
- Provide 5-star hotel service standards
- Each charter brings new guests with different preferences
- High-pressure, fast-paced environment
- Potential for significant gratuities from satisfied guests

---

### EXPEDITION YACHTS
**Definition:** Vessels built or converted for long-distance cruising to remote parts of the world.

**Key Characteristics:**
- Technical ability for scientific research and marine conservation
- Often carry specialist crew (local guides, helicopter pilots, ski instructors, videographers)
- Far more crew space than typical yachts
- Built for extreme conditions and extended voyages

> "The charter industry suits yacht owners well as a way of mitigating their running costs with charter income."`,
        part: 'part1'
      }
    ]
  },
  {
    id: 'part2',
    title: 'Part 2: Departments & Hierarchy',
    description: 'Onboard structure, chain of command, and career pathways',
    slides: [
      {
        id: 'slide5',
        slideNumber: 'SLIDE 5',
        sectionTitle: 'Onboard Departments',
        headline: 'The Four Key Departments',
        voIntent: 'Broad overview of Deck, Engineering, Galley, and Interior.',
        interaction: 'Tabbed layout',
        imagePlaceholder: 'Organizational diagram showing four departments',
        assessment: 'Drag & Drop: Sort these roles into their correct departments:\n- Captain, Chief Officer, Bosun, Deckhand\n- Chief Engineer, 2nd Engineer, Motorman\n- Head Chef, Sous Chef, Crew Chef\n- Chief Stewardess, Stewardess, Laundry Master',
        voiceoverScript: 'Yacht operations are divided into four key departments: Deck (navigation and exterior), Engineering (mechanical systems), Galley (food preparation), and Interior (guest service and housekeeping). Each department plays a vital role in ensuring smooth yacht operations and exceptional guest experiences.',
        content: `## The Four Key Departments

Yacht crewing varies depending on vessel size, from small yachts with just 2 crew members to mega yachts with 50+ crew. As vessels get larger, departments become more specialized.

### 1. DECK DEPARTMENT (Exterior)
**Responsibilities:**
- Navigation and bridge operations
- Exterior maintenance and cleaning
- Water sports equipment management
- Guest activities on deck
- Mooring and anchoring operations

**Key Positions:**
- Captain (overall command)
- Chief Officer / First Officer
- Second Officer, Third Officer
- Bosun (lead deckhand)
- Deckhands

---

### 2. ENGINEERING DEPARTMENT
**Responsibilities:**
- Engine operation and maintenance
- All mechanical and electrical systems
- Generator management
- HVAC and plumbing systems
- AV/IT systems (on larger vessels)

**Key Positions:**
- Chief Engineer
- Second Engineer
- Third Engineer
- Motorman
- AV/IT Officer (on larger yachts)
- Electrical Officer

---

### 3. GALLEY DEPARTMENT
**Responsibilities:**
- Guest meal preparation and presentation
- Crew meal provisioning
- Menu planning and provisioning
- Food safety and hygiene standards
- Special dietary requirements

**Key Positions:**
- Head Chef / Executive Chef
- Sous Chef
- Pastry Chef / Specialty Chef
- Crew Chef
- Galley Hand

---

### 4. INTERIOR DEPARTMENT
**Responsibilities:**
- Guest service and hospitality
- Housekeeping and cabin detailing
- Laundry services
- Interior provisioning and inventories
- Flower arrangements and table settings
- Guest activities and preferences management

**Key Positions:**
- Chief Stewardess / Head of Interior
- Purser (on larger vessels)
- Head of Service
- Head of Housekeeping
- Second/Senior Stewardess
- Stewardesses (service and housekeeping)
- Laundry Master
- Spa Therapist / Beautician / Hairdresser (on larger yachts)

> "As the vessel gets larger so will the number of individuals in each department with specific duties pertaining to areas in each department."`,
        part: 'part2'
      },
      {
        id: 'slide6',
        slideNumber: 'SLIDE 6',
        sectionTitle: 'The Chain of Command',
        headline: 'Hierarchy & Reporting Lines',
        voIntent: 'Explaining the importance of following the established system.',
        interaction: 'Progressive organizational chart (Stewardess → Chief Stew → Purser → Captain)',
        imagePlaceholder: 'Flowchart showing interior department hierarchy',
        assessment: 'Scenario-Based: A guest requests a special meal. As a stewardess, who should you inform first?\nA) The Captain\nB) The Chief Stewardess\nC) The Chef directly\nD) The Purser',
        voiceoverScript: 'The chain of command ensures efficient communication and operations. For the Interior Department, the hierarchy typically flows from Laundry/Housekeeping Stew to Head of Housekeeping, then Chief Stewardess, Purser, and finally Captain. Understanding and respecting this structure is essential for professional success.',
        content: `## Understanding the Chain of Command

When working on board any vessel, you are part of an established system and hierarchy. Each crew member should be aware of the chain of command and follow professional protocol.

### Interior Department Chain of Command:

**Housekeeping Track:**
\`\`\`
Laundry Stew / Housekeeping Stew
    ↓
Head of Housekeeping
    ↓
Chief Stewardess
    ↓
Purser
    ↓
Captain
\`\`\`

**Service Track:**
\`\`\`
Service Stew / Junior Stewardess
    ↓
Head of Service
    ↓
Chief Stewardess
    ↓
Purser
    ↓
Captain
\`\`\`

### Hierarchy Levels:

| Level | Position | Reports To |
|-------|----------|------------|
| 1 | **Purser** | Captain |
| 2 | **Chief Stewardess** | Captain |
| 3 | **Head of Housekeeping / Head of Service** | Chief Stewardess |
| 4 | **Second Stewardess** | Chief Stewardess |
| 5 | **Stewardesses** | Chief Stewardess / Second Stewardess |

### Why Chain of Command Matters:

1. **Efficient Communication:** Information flows through proper channels
2. **Clear Accountability:** Everyone knows their responsibilities
3. **Professional Protocol:** Maintains order and respect onboard
4. **Operational Safety:** Critical information reaches the right people
5. **Career Development:** Shows professionalism and understanding

### Key Principle:
> "When working on board any vessel you are part of an established system and hierarchy. Each crew member should be aware of chain of command and follow professional protocol."

**Never bypass your immediate supervisor** unless it's an emergency. Always report through the proper channels to maintain professional relationships and operational efficiency.`,
        part: 'part2'
      },
      {
        id: 'slide7',
        slideNumber: 'SLIDE 7',
        sectionTitle: 'Career Pathways',
        headline: 'Progression within the Interior Department',
        voIntent: 'Outlining roles from Laundry Stew to Purser and required qualifications.',
        interaction: 'Vertical process map',
        imagePlaceholder: 'Career ladder showing progression from junior to senior roles',
        assessment: 'Knowledge Check: What qualification is required to advance to Chief Stewardess?\nA) Power Boat Level 2\nB) Crowd Management Course\nC) PADI Diving Certificate\nD) VHF Radio License',
        voiceoverScript: 'Career progression in the Interior Department follows a clear path: Stew/Deck/Cook → Laundry Stewardess → Third Stewardess → Second Stewardess → Chief Stewardess → Purser. Each level requires additional training, experience, and specialized qualifications to advance.',
        content: `## Interior Department Career Progression

### What is a Stewardess?
A stewardess is multi-skilled in all facets of service and housekeeping, responsible for attending to the comforts and well-being of the Owner or guests while living onboard. A steward/ess is required to always be professional and maintain a "First Class Attitude."

### Career Pathway:

\`\`\`
STEW/DECK/COOK
    ↓ (gain experience)
LAUNDRY STEWARDESS
    ↓ (specialized training)
THIRD STEWARDESS
    ↓ (demonstrate skills)
SECOND STEWARDESS
    ↓ (leadership & management)
CHIEF STEWARDESS
    ↓ (advanced qualifications)
PURSER
\`\`\`

### Position Requirements:

#### 1. Stew/Deck/Cook (Entry Level)
**Basic Qualifications:**
- STCW 95/2010
- ENG 1 Medical Certificate
- Interior Training Course Level 1
- Power Boat Level 2
- VHF Radio License
- Food Handlers Course

#### 2. Laundry Stewardess
**Additional Skills:**
- Advanced Laundry Training
- Sewing and repair skills
- Dry cleaning equipment operation
- Stain removal expertise

#### 3. Third Stewardess
**Additional Qualifications:**
- Floral arrangement courses
- Barista training
- Basic service skills

#### 4. Second Stewardess
**Additional Qualifications:**
- Silver Service courses
- Wine appreciation (WSET)
- Strong computer skills
- Supervisory experience

#### 5. Chief Stewardess
**Additional Qualifications:**
- Crowd Management Course
- Butler courses
- Proficiency in Security Awareness
- Management and leadership training

#### 6. Purser (Highest Interior Position)
**Additional Qualifications:**
- Advanced Purser training course
- Entry-level accounting diploma (bonus)
- ISM & ISPS protocol knowledge
- Advanced computer skills

> "A stewardess position can involve at least three to five different levels while employed on these luxury vessels and it is important to have personal goals and vision when looking at your overall career within the industry."`,
        part: 'part2'
      }
    ]
  },
  {
    id: 'part3',
    title: 'Part 3: Behaviour & Work Ethics',
    description: 'Professional standards, presentation, and work ethic',
    slides: [
      {
        id: 'slide8',
        slideNumber: 'SLIDE 8',
        sectionTitle: 'Professional Conduct',
        headline: 'Standards of Behaviour & Personal Presentation',
        voIntent: 'Framing appearance as a representation of the yacht and owner.',
        interaction: 'Checklist (Grooming, Tattoos, Piercings, Uniform)',
        imagePlaceholder: 'Professional crew members in proper uniform',
        assessment: 'Checklist Assessment: Mark which items are acceptable onboard:\n[ ] Visible tattoos\n[ ] Multiple ear piercings\n[ ] Neatly styled hair\n[ ] Subtle makeup\n[ ] Strong perfume',
        voiceoverScript: 'As a crew member, you represent both the yacht and its owner. Professional standards include: hair neatly styled and pulled back, no visible tattoos or facial piercings, conservative attire, fresh breath, clean hands with trimmed nails, and daily showering. Remember: your appearance reflects the yacht\'s standards.',
        content: `## Professional Standards of Presentation

> "A good personality is as important as good skills."

Whether you work on a private or charter vessel, keep in mind that **you represent the yacht and by association, the owner.** When on duty, you are expected to be clean, neat and tidy in appearance.

### Personal Grooming Standards:

#### Hair:
- ✓ Neatly styled, pulled back or able to be pulled back
- ✓ Short styles acceptable for men
- ✓ Oily hair must be washed daily

#### Piercings:
- ✗ NO pierced nose, tongue, or visible facial piercings
- ✓ Pierced ears are fine (stud earrings only)

#### Tattoos:
- ✗ Tattoos are generally frowned upon
- ✗ Should not be visible from uniform
- ✓ Must be coverable at all times

#### Hygiene:
- ✓ Fresh breath always
- ✓ Hands washed and clean at all times
- ✓ Fingernails trimmed and clean (no dirt underneath)
- ✓ Shower daily (twice daily recommended)
- ✓ Deodorant must be worn at all times
- ✓ Perfumes should be subtle, not strong

#### Hair Removal:
- ✓ Facial and body hair awareness essential
- ✓ Unshaven legs and armpits are not acceptable
- ✓ Men: facial hair attended to daily
- ✓ Women: plucking or waxing as needed

### Uniform Standards:
- Uniform must be immaculate, spotlessly cleaned and ironed
- You will be given 2-3 uniforms including jackets and foul weather gear
- Daytime: typically skorts and polo shirt
- Evening: change into "blacks" for service
- Always have backup uniforms clean and ironed
- Some yachts require epaulettes indicating rank

### Self-Confidence & Poise:
Having poise means possessing a calm and confident way of behaving, combined with an ability to control feelings and reactions in difficult situations.

**How to demonstrate poise:**
- Stand tall with good posture
- Make eye contact
- Remain calm and collected
- Walk and stand tall, looking ahead
- Dress appropriately (undergarments never visible)

> "Getting along with other crew members is essential. In fact, many Captains require a candidate to interview with the crew before being hired."`,
        part: 'part3'
      },
      {
        id: 'slide9',
        slideNumber: 'SLIDE 9',
        sectionTitle: 'The Yachting Work Ethic',
        headline: 'Integrity, Pride, and Attention to Detail',
        voIntent: 'Emphasizing that "the devil is in the details".',
        interaction: 'Flip-card scenario prompts',
        imagePlaceholder: 'Before/after comparison showing attention to detail in cabin presentation',
        assessment: 'Scenario Cards: Flip each card to reveal the correct action\nScenario 1: You notice a fingerprint on a glass just before service.\nScenario 2: A guest cabin looks clean but you spot dust under the bed.\nScenario 3: You\'re running late and considering skipping a final check.',
        voiceoverScript: 'The yachting industry demands exceptional attention to detail. Whether it\'s ensuring glassware is spotless, checking under furniture for dust, or conducting final inspections, the work ethic required is uncompromising. Taking pride in your work means never cutting corners and always striving for perfection.',
        content: `## The Yachting Work Ethic: Attention to Detail

> "The devil is in the details."

The level of detail expected from you onboard a vessel is of the **highest caliber**. Heavily detailed cleaning schedules will be handed to you by your Head of Interior which you must follow when organizing and cleaning.

### Key Work Ethic Principles:

#### 1. Pride in Your Work
Taking pride in your work means feeling satisfied with your contributions. Ways to build pride:

- **Embrace your role** – Understand how your contributions affect the guest experience
- **Improve every day** – Keep striving to learn new skills
- **Build your reputation** – Be alert, lively, enthusiastic, knowledgeable
- **Participate in progress** – Give feedback and demonstrate your eye for detail
- **Be positive** – Engage with positive people and invest in building positivity

#### 2. Attention to Detail

**What "attention to detail" means in yachting:**
- Checking every glass for fingerprints before service
- Looking under furniture for dust and debris
- Ensuring cushions and throws are perfectly arranged
- Verifying every item is in its proper place
- Conducting final inspections before presenting to guests

**Detailing Definition:**
> "Detailing" in yachting refers to cleaning interior with cotton buds or toothpicks—getting into every crack, corner, and crevice.

#### 3. Required Work Ethic Traits:

| Trait | Description |
|-------|-------------|
| **Dependability** | Always complete your duties |
| **Integrity** | Honest and trustworthy |
| **Leadership** | Lead by example |
| **Stress Tolerance** | Handle pressure gracefully |
| **Attention to Detail** | Nothing escapes your notice |
| **Self-Control** | Manage emotions professionally |
| **Initiative** | Act without being told |
| **Responsibility** | Own your tasks and mistakes |
| **Persistence** | Never give up |
| **Adaptability** | Flexible to changing situations |

#### 4. Common Scenarios:

**Scenario 1: Fingerprint on Glass**
❌ Wrong: Hope no one notices
✓ Right: Replace the glass immediately

**Scenario 2: Dust Under Bed**
❌ Wrong: It's hidden, guests won't see
✓ Right: Clean it thoroughly

**Scenario 3: Running Late**
❌ Wrong: Skip the final check
✓ Right: Do the check properly, even if brief

> "Grit and resilience are key characteristics for any successful crew. At times, the work can be difficult and the hours long."`,
        part: 'part3'
      },
      {
        id: 'slide10',
        slideNumber: 'SLIDE 10',
        sectionTitle: 'Etiquette & Discretion',
        headline: 'Addressing Guests & Handling Privacy',
        voIntent: 'The critical role of NDAs and confidentiality.',
        interaction: '"Do vs. Don\'t" sorting activity',
        imagePlaceholder: 'Visual guide showing proper vs. improper guest interaction',
        assessment: 'Sorting Activity: Drag each behavior to "DO" or "DON\'T"\n- Post photos of the yacht on social media\n- Address guests as "Sir" or "Madam"\n- Discuss guest preferences with other crew\n- Maintain strict confidentiality\n- Share yacht location with friends',
        voiceoverScript: 'Confidentiality is paramount in yachting. Non-Disclosure Agreements (NDAs) are standard and may prohibit sharing owner names, vessel details, locations, or guest information. Violating an NDA can result in immediate termination and potential legal action. Always maintain the highest standards of discretion.',
        content: `## Professional Etiquette & Confidentiality

### Addressing Guests

Always ask your Captain and Head of Department how they would like to be addressed. Likewise, always check with guests whether they like to be addressed as:
- "Mrs. / Madame" 
- "Sir"
- Or by their first name (only if invited)

**Never assume** you can address a guest by their first name!

### Common Courtesy Rules:

#### Speech and Vocabulary:
- ✓ Always speak carefully and clearly
- ✓ Do not use slang
- ✓ NO swearing around guests or crew
- ✓ Say please and thank you
- ✓ Introduce people by their names and rank
- ✓ Be friendly, helpful, and polite

#### Noise Control:
- ✓ Step lightly (toe first, then heel)
- ✓ Never slam doors or cabinets
- ✓ Hold door handles down when closing
- ✓ Be quiet in crew corridors
- ✓ Respect others' sleep schedules

#### Personal Habits:
- ✓ Don't leave belongings lying around
- ✓ Keep your cabin tidy
- ✓ Pick up after yourself in crew areas
- ✓ Mind your manners at all times

---

## Confidentiality & NDAs

### Non-Disclosure Agreements (NDAs)

NDAs are **extremely common** in the yachting industry and are sometimes included as part of contracts to maintain the owner's desire for privacy.

### What NDAs May Prohibit:
- Owner's name and identity
- Vessel name and details
- Present or future locations
- Details of guests onboard
- Photography, videos, or audio clips
- Social media posts about the yacht

### Consequences of Violating an NDA:
- **Immediate termination of employment**
- Potential financial compensation claims
- Legal action by the owner
- Damage to your professional reputation
- Difficulty finding future employment

> "If you are found to be in violation of an NDA, whether this is intentional or not, the consequences are usually a termination of employment. If someone is harmed, the owner could seek financial compensation."

### General Privacy Rules:
- ✓ Assume all guest information is confidential
- ✓ Never discuss guests with other crew unnecessarily
- ✓ Don't share yacht locations
- ✓ No photos or social media posts
- ✓ Maintain discretion even after leaving the vessel

### Professional Etiquette Summary:
> "Expressing your opinion is important, but it is imperative to do it with class, integrity, and modesty."`,
        part: 'part3'
      }
    ]
  },
  {
    id: 'part4',
    title: 'Part 4: Effective Communication',
    description: 'Communication styles, phonetic alphabet, and radio operations',
    slides: [
      {
        id: 'slide11',
        slideNumber: 'SLIDE 11',
        sectionTitle: 'Communication Styles',
        headline: 'Verbal and Non-Verbal Communication',
        voIntent: 'How body language says what words cannot.',
        interaction: 'Accordion (Listening, Rapport, Empathy)',
        imagePlaceholder: 'Illustration showing positive body language vs. negative body language',
        assessment: 'Interactive Quiz: Which communication approach is most effective?\nA) Speaking quickly to get your point across\nB) Maintaining eye contact and active listening\nC) Using technical jargon to sound professional\nD) Interrupting to show engagement',
        voiceoverScript: 'Effective communication combines verbal clarity with positive non-verbal cues. Key elements include: active listening, maintaining eye contact, building rapport through common ground, and demonstrating empathy by understanding others\' perspectives. Remember: your body language often speaks louder than words.',
        content: `## Effective Communication

> "The body says what words cannot." — Martha Graham

Succeeding in your career onboard will greatly be determined by how you communicate and interact with other crew members, heads of department, guests and owners.

### Types of Communication:

#### 1. Verbal Communication
As you grow up, you learn the language spoken by those around you. However, there is much more to verbal communication than grammar rules. The meaning of what we say depends on:
- The people we're speaking to
- The culture we surround ourselves in
- The context of the conversation

**Tips for clear verbal communication:**
- Speak clearly and at a moderate pace
- Use appropriate vocabulary for your audience
- Avoid slang in professional settings
- Confirm understanding by asking questions

#### 2. Non-Verbal Communication
Nonverbal communication is an important component of effective communication. Examples include:
- Smiling, nodding, waving
- Moving your chair closer to someone
- Raising your vocal volume
- Saying nothing at all (silence)

### The Four Keys to Effective Communication:

#### 1. Listening
Listening enhances your ability to be understood and makes you a better communicator. Benefits include:
- Builds trust and reduces misunderstandings
- Eliminates conflict
- Builds stronger relationships
- Increases productivity
- Helps you retain information

**Active listening techniques:**
- Face the speaker
- Lean forward slightly
- Don't cross your arms
- Maintain eye contact
- Avoid letting your mind wander

#### 2. Communicate Confidently
Being confident can be as easy as:
- Maintaining eye contact
- Having a relaxed body stance
- Talking with concision
- Not making statements sound like questions
- Avoiding aggressive or demeaning tones

#### 3. Building Rapport
Rapport is a connection or relationship with someone else. Employers usually hire people they feel will get on well with the rest of the crew.

**How to build rapport:**
- Find common ground
- Be empathic
- Show genuine interest in others
- Be approachable and friendly

#### 4. Empathy
Demonstrate that you can see another person's point of view. 

**How to show empathy:**
- Commit to listening rather than assuming
- Hear directly from the source
- Develop a deeper understanding of their perspective
- Respect different backgrounds and experiences

### Body Language & Facial Expressions

**Body Language:** Your body movements communicate emotions. A simple thumbs-up can express approval and encouragement.

**Facial Expressions:** Facial movements communicate various emotions:
- Happiness
- Surprise
- Fear
- Disapproval
- Sadness
- Interest

> "In relation to a yachting scenario, when it comes to service with guests, at times we may not be feeling our best, we may feel lethargic, fatigued or stressed which very often will read on our facial expressions. It is important that during service we are aware of our emotions however try our best not to let it affect our performance during service."`,
        part: 'part4'
      },
      {
        id: 'slide12',
        slideNumber: 'SLIDE 12',
        sectionTitle: 'The Phonetic Alphabet',
        headline: 'The NATO Phonetic Alphabet',
        voIntent: 'Ensuring accuracy in high-stakes environments.',
        interaction: 'Interactive soundboard (Alpha to Zulu)',
        imagePlaceholder: 'Complete NATO phonetic alphabet chart',
        assessment: 'Audio Matching: Listen to each phonetic pronunciation and select the correct letter.\n- "AL FAH" = ?\n- "BRAH VOH" = ?\n- "CHAR LEE" = ?',
        voiceoverScript: 'The NATO Phonetic Alphabet is essential for clear communication, especially over radio. Each letter has a distinct word: Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliet, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu. Mastering this ensures messages are understood correctly in critical situations.',
        content: `## The NATO Phonetic Alphabet

The ability to communicate properly and make yourself understood can make a great difference in life-threatening situations. The NATO Phonetic Alphabet is a spelling alphabet used to ensure clear communication, especially over radio.

### Why Use the Phonetic Alphabet?

- Many letters sound alike when spoken (B, C, D, E, G, P, T, V, Z)
- Ensures accuracy in high-stakes environments
- Used internationally across all NATO countries
- Critical for maritime safety communications
- Prevents misunderstandings that could have serious consequences

### The Complete NATO Phonetic Alphabet:

| Letter | Word | Pronounced As |
|--------|------|---------------|
| A | **Alfa** | AL FAH |
| B | **Bravo** | BRAH VOH |
| C | **Charlie** | CHAR LEE |
| D | **Delta** | DELL TAH |
| E | **Echo** | ECK OH |
| F | **Foxtrot** | FOKS TROT |
| G | **Golf** | GOLF |
| H | **Hotel** | HOH TELL |
| I | **India** | IN DEE AH |
| J | **Juliet** | JEW LEE ETT |
| K | **Kilo** | KEY LOH |
| L | **Lima** | LEE MAH |
| M | **Mike** | MIKE |
| N | **November** | NO VEM BER |
| O | **Oscar** | OSS CAH |
| P | **Papa** | PAH PAH |
| Q | **Quebec** | KEH BECK |
| R | **Romeo** | ROW ME OH |
| S | **Sierra** | SEE AIR RAH |
| T | **Tango** | TANG GO |
| U | **Uniform** | YOU NEE FORM |
| V | **Victor** | VIK TAH |
| W | **Whiskey** | WISS KEY |
| X | **X-ray** | ECKS RAY |
| Y | **Yankee** | YANG KEY |
| Z | **Zulu** | ZOO LOO |

### When to Use:

**Always spell out using phonetic alphabet when:**
- Communicating over VHF radio
- Giving coordinates or call signs
- Spelling names or important information
- In any situation where clarity is critical

**Example:**
Instead of saying "My name is Kate" (which could be confused with "Cate," "Gate," etc.)
Say: "My name is **Kilo Alfa Tango Echo**"

> "When you need to spell out something over a walkie talkie, don't use letters as many of them sound alike. Spell them out using what's known as the NATO phonetic alphabet instead."`,
        part: 'part4'
      },
      {
        id: 'slide13',
        slideNumber: 'SLIDE 13',
        sectionTitle: 'Radio Operations',
        headline: 'VHF Radio Basics & Protocol',
        voIntent: 'Proper terminology (Over, Out, Standby) and emergency use (Mayday vs. Pan-Pan).',
        interaction: 'Simulated radio call dialogue',
        imagePlaceholder: 'VHF radio with labeled buttons and controls',
        assessment: 'Simulation Exercise: Complete this radio call correctly:\n\'______, ______, this is [Your Yacht], [Your Yacht], ______\'\n\nEmergency Protocol: When would you use "Mayday" versus "Pan-Pan"?',
        voiceoverScript: 'VHF radio communication follows strict protocols. Standard terminology includes: "Over" (finished speaking), "Out" (conversation complete), "Standby" (please wait), and "Say Again" (repeat message). Emergency calls use "Mayday" for life-threatening situations and "Pan-Pan" for urgent but non-life-threatening situations.',
        content: `## VHF Radio Operations

A VHF radio is a **critical piece of safety equipment** that should be on board every yacht. Knowing how to use it could save your life one day and those of the passengers onboard.

### Basic Steps for Using a VHF Radio:

1. **Turn on** the VHF unit and adjust the squelch until static stops
2. **Perform a radio check** with another VHF unit on board (NOT on Channel 16)
3. **Switch to one-watt power setting** and key the microphone
4. **Hold microphone 8cm from mouth** and press Push-to-Talk (PTT)
5. **Call three times**, followed by your identification/call sign
6. **Wait for reply** confirming your transmission was heard
7. **Use Channel 16** to call other ships, then switch to another channel for conversation
8. **Find a free channel** for internal communications (avoid Channels 06, 13, 16, 75, 76)

### Standard Radio Terminology:

| Term | Meaning |
|------|---------|
| **Affirmative** | Yes |
| **Negative** | No |
| **Received / Copy** | Message heard and understood |
| **Say Again / Repeat** | Please repeat the message |
| **Standby** | Please wait |
| **Over** | I have finished speaking |
| **Out** | Conversation is finished |
| **Break** | Pause between multiple points |

### How to Call Another Vessel:

**Example calling another yacht:**

1. Switch to Channel 16
2. **Call:** "Seaspray, Seaspray, this is Blue Dolphin, Blue Dolphin, Over"
3. **Receive:** "Blue Dolphin, this is Seaspray, Over"
4. **Call:** "Seaspray, this is Blue Dolphin. Suggest channel zero eight. Over"
5. **Receive:** "Blue Dolphin this is Seaspray. Change channel to zero eight. Over"
6. **Switch to Channel 08** and resume communication

### Emergency Calls:

#### MAYDAY (Life-Threatening Emergency)
Use when **lives are in immediate danger**:
- Tune to Channel 16
- Transmit: "**Mayday Mayday Mayday**" + vessel name + call sign
- Wait for response
- Be ready to provide location (GPS coordinates)

#### PAN-PAN (Urgent but Not Life-Threatening)
Use when situation is **bad but not immediately life-threatening**:
- Tune to Channel 16
- Transmit: "**Pan-Pan Pan-Pan Pan-Pan**" + vessel name + call sign
- Explain the urgent situation

### Radio Etiquette Tips:

- ✓ **Pause before speaking** (1 second after pressing PTT)
- ✓ **Identify yourself** at the start of conversation
- ✓ **Keep communications short and simple**
- ✓ **Use the phonetic alphabet** when spelling
- ✓ **Speak clearly** in a normal tone
- ✓ **Avoid interrupting** others
- ✓ **Assume others can hear** your conversation
- ✓ **Speak in English** (international standard)
- ✓ **Perform regular equipment checks**

> "Your career you will most definitely be required to use a two-way radio. On smaller vessels it may be to communicate with vessels or marinas on entry. However, on mega yachts, each department is using a different channel."`,
        part: 'part4'
      }
    ]
  },
  {
    id: 'part5',
    title: 'Part 5: Etiquette & Cultural Diversity',
    description: 'Diversity awareness, religious customs, and cultural interaction',
    slides: [
      {
        id: 'slide14',
        slideNumber: 'SLIDE 14',
        sectionTitle: 'Understanding Diversity',
        headline: 'Diversity, Equality, and Cultural Competence',
        voIntent: 'Building skills in cultural awareness and flexibility.',
        interaction: 'Video interview snippet on cultural differences',
        imagePlaceholder: 'Diverse crew members working together',
        assessment: 'Reflection Question: Describe a time when you encountered cultural differences. How did you adapt your behavior?',
        voiceoverScript: 'Cultural competence is essential in yachting\'s multicultural environment. This includes understanding differences in nationality, ethnicity, religion, gender, and age. Developing cultural awareness, intelligence, and flexibility enables you to anticipate and respond appropriately to cultural sensitivities.',
        content: `## Cultural Diversity & Competence

The superyacht industry has been paying closer attention to diversity and inclusion, with a focus on equality and creating a more sustainable industry.

### What is Cultural Diversity?

Cultural diversity includes and is not limited to differences in:
- Nationality
- Ethnicity
- Religion
- Gender
- Sexual orientation
- Age

These all contribute to and influence our behaviours, thoughts, reactions, and expectations of self and others.

### Cultural Competence

For there to be true cultural diversity in a team, the team should be able to understand and demonstrate **cultural competence**—an attribute that can change the way in which we lead and interact with crew and guests alike.

### Skills for Cultural Competency:

To achieve cultural competency, crew need to develop:

1. **Cultural Awareness**
   - Understanding that our own culture differs from others
   - Recognizing our own cultural assumptions
   - Being conscious of how culture affects communication

2. **Cultural Intelligence**
   - Ability to function effectively in culturally diverse settings
   - Understanding different cultural norms and values
   - Adapting behavior appropriately

3. **Cultural Flexibility**
   - Willingness to adjust your approach
   - Openness to different ways of doing things
   - Ability to work comfortably across cultures

### Benefits of Cultural Competence:

- Better teamwork among multinational crew
- Improved guest service for international clients
- Reduced misunderstandings and conflicts
- Enhanced professional reputation
- More enjoyable work environment

### Practical Application:

**Onboard, you will work with:**
- Crew from various countries and backgrounds
- Guests from different cultures
- Provisions and contractors from around the world

**Remember:**
> "When joining a new vessel with a predominantly larger number of the crew, guests or owners from a different culture do not let it intimidate you. Understand that you may go through a phase known as culture shock, which may leave you with feelings of alienation. Learn how to communicate and understand their culture and even teach them about yours."

### Bullying & Harassment:

**Bullying** is a form of harassment that includes hostile or vindictive behavior, causing the recipient to feel threatened or intimidated.

**Harassment** is a form of discrimination which has the purpose or effect of violating the dignity of a person and creating an intimidating, hostile, degrading, humiliating or offensive environment.

> "Bullying and harassment is never acceptable and there should be systems in place to ensure crew are able to report bullying and harassment safely and confidentially."`,
        part: 'part5'
      },
      {
        id: 'slide15',
        slideNumber: 'SLIDE 15',
        sectionTitle: 'Religious Customs',
        headline: 'Awareness of Religious Traditions & Dietary Needs',
        voIntent: 'Managing specific needs for Buddhist, Christian, Hindu, Muslim, and Jewish guests.',
        interaction: 'Hotspot map of global customs',
        imagePlaceholder: 'World map with clickable regions showing religious customs',
        assessment: 'Matching Exercise: Match each religion to its dietary practice:\n- Buddhism: Vegetarian preference\n- Hinduism: No beef consumption\n- Islam: Halal requirements\n- Judaism: Kosher requirements\n- Christianity: Some abstain from meat on Fridays',
        voiceoverScript: 'Understanding religious customs is crucial for guest service. Key considerations include: Buddhist preference for vegetarian food, Hindu prohibition of beef, Islamic Halal requirements, Jewish Kosher laws (separating meat and dairy), and various Christian observances. Always consult guests about their specific requirements.',
        content: `## Religious Customs & Dietary Requirements

A vast diversity of religious and spiritual traditions exists, and your guests or fellow crew may be affiliated with any of them. Taking the time to learn more about religious traditions will increase your effectiveness as a steward/ess.

### BUDDHISM

**Beliefs:**
- Faith centers on the Buddha, served as an example of a way of life
- Belief in reincarnation and karma (good/evil deeds have consequences)
- Acceptance of responsibility for one's actions

**Dietary Requirements:**
- Most Buddhists are **vegetarian** (non-violence principle)
- Some may eat fish
- Always ask about specific preferences

---

### CHRISTIANITY

**Beliefs:**
- Various denominations (Church of England, Catholic, Protestant, etc.)
- Record specific denomination in guest notes

**Dietary Requirements:**
- No general dietary requirements
- Some observe Friday as a meat-free day
- Some may fast before Holy Communion
- Some abstain from alcohol
- Always ask about individual practices

---

### HINDUISM

**Beliefs:**
- Belief in reincarnation
- One God understood in many forms
- Prayer, serving elders, and generous hospitality are important

**Dietary Requirements:**
- **No beef** (cow is sacred)
- Some avoid eggs and chicken
- Many are vegetarian
- Some vegetarians eat fish (pescatarian)
- Dairy is acceptable if free of animal fat
- "Hot and cold food" relates to medicinal properties, not temperature
- Handwashing essential before/after eating
- Prefer running water for washing (bidet preferred)

---

### ISLAM

**Beliefs:**
- "Surrender to God's will"
- Four chief duties: prayer (5x daily), alms giving, fasting, pilgrimage to Mecca

**Dietary Requirements (Halal):**
- **No pork** or pork products
- Meat must be slaughtered according to Halal ritual
- Halal lamb, beef, and chicken are permitted
- Fish and eggs allowed
- Must not be cooked where pork is cooked
- Muslims attach great importance to cleanliness
- Prefer showers to baths

---

### JUDAISM

**Beliefs:**
- Based on worship of one God
- Ten Commandments and practice of charity
- Religion and culture are entwined

**Dietary Requirements (Kosher):**
- **No pork, shellfish, rabbit** (treif)
- Meat and dairy **never mixed** at same meal
- No milk in drinks or cream with dessert after meat
- No butter on meat sandwiches
- Meat must come from forequarters of kosher animals
- Must be slaughtered by certified person (shochet)
- Fish must have fins and scales
- Eggs must be checked for blood

**Shabbat (Friday sunset to Saturday nightfall):**
- Day of rest
- No electronic devices, operating machinery, or switching lights
- Two candles lit at table
- Family meals with wine and challah bread
- Crew may be asked to assist with tasks guests cannot perform

> "Taking the time to learn more about religious and spiritual traditions that are important to your guests will increase your effectiveness as a steward/ess."`,
        part: 'part5'
      },
      {
        id: 'slide16',
        slideNumber: 'SLIDE 16',
        sectionTitle: 'Guest Interaction by Culture',
        headline: 'Meeting & Greeting Different Nationalities',
        voIntent: 'Nuances between American, Arabic, Russian, and Jewish cultures.',
        interaction: 'Scenario-based quiz on addressing guests',
        imagePlaceholder: 'Cultural etiquette guide showing different greeting styles',
        assessment: 'Scenario Quiz: How should you address these guests?\n1. An Arabic Royal Family member\n2. An American businessman\n3. A Russian VIP\n4. A Jewish guest observing Shabbat',
        voiceoverScript: 'Cultural awareness in guest interaction is vital. Americans prefer casual, friendly service; Arabic guests (often royalty) expect formal address (\'Your Royal Highness\'); Russians value privacy and efficiency; Jewish guests may observe Shabbat (no electronic devices Friday sunset to Saturday nightfall). Adapt your approach to each culture\'s expectations.',
        content: `## Guest Interaction by Nationality

### AMERICAN CULTURE

**Characteristics:**
- Very relaxed, approachable, and friendly
- Communicate well and directly
- Happy to help with information
- Appreciate casual meal styles
- Enjoy themed parties and events

**Service Preferences:**
- Casual, friendly service
- Direct communication
- Approachable atmosphere
- Fun activities and entertainment

**Form of Address:**
- "Mr. / Mrs. [Surname]" or first name if invited
- "Mr. / Mrs. [First Name]" is acceptable on charter
- Children: "Mr. / Miss" initially, then more relaxed

**Tipping:** Americans are easiest to please and crew generally receive great tips for good service.

---

### ARABIC CULTURE

**Characteristics:**
- Often Royal family members
- Travel with personal butlers, security, and assistants
- Prefer family-style meals
- Some eat with hands (provide finger bowls)
- Live by night due to heat in homeland

**Service Preferences:**
- All information through their staff
- Meals at unusual times (breakfast at 14:00, dinner after midnight)
- Minimal table decoration (free space preferred)
- Arabic tea and coffee preparation by their butlers

**Form of Address:**
- "**Your Royal Highness**" when addressing directly
- "His / Her Royal Highness" when speaking about them
- May be invited to use "Sir / Madam"
- Greet with "*As-Salamu Alaykum*" (Peace be upon you)
- Response: "*Alaykum Salam*"

**Important Notes:**
- No pork products (even with liberal Arabs)
- Alcohol consumption is normal for some
- May request Halal meat

---

### RUSSIAN CULTURE

**Characteristics:**
- Reserved and not very communicative
- Very critical and hard to impress
- Won't compliment unless 100% satisfied
- Prefer family-style service with silver service
- Service speed has priority over procedures

**Service Preferences:**
- Check all preferences with brokers/PAs
- Food must be very hot
- Big food quantities
- Attentive drink service (constant refills)
- Finger bowls served and replaced

**Breakfast:**
- Most important meal
- Oatmeal (kasha) - buckwheat soaked overnight
- Soups, meat, fish
- Starts early, continues for hours

**Tea Service:**
- Lots of black or green tea
- Not strong tea
- Serve in teapot, add bag in front of guest

**Form of Address:**
- Always "Mister / Sir" or "Madam"
- "Mister / Miss" for children

**Cultural Notes:**
- Orthodox Christmas: January 7th (very busy)
- Children can be critical and demanding
- May appear rude (won't say please/thanks every time)
- Don't take it personally - it's cultural
- Lack of smiling doesn't mean unhappiness

---

### JEWISH CULTURE

**Characteristics:**
- Come from various countries (USA, Israel, Ex-USSR)
- Follow Jewish religious food requirements
- Flexibility varies (some very orthodox, some flexible)

**Service Preferences:**
- Respect for religion and rules
- Frequent galley visits to communicate with Chef
- May bring their own Kosher food

**Kosher Requirements:**
- Meat and dairy completely separate
- May ask to keep them separated in fridge
- Some request fully strict procedure with separate dishes
- Fish and eggs (pareve) have their own rules

**Shabbat Observance (Friday sunset - Saturday nightfall):**
- No electronic devices
- No operating machinery
- No switching lights on/off
- Crew may be asked to assist with these tasks

**Form of Address:**
- Always "Mister / Sir" or "Madam"
- "Mister / Miss" for children

**Cultural Notes:**
- Kosher food provisioning is challenging and expensive
- Always get price quotes approved before purchasing
- Prepare meals at reasonable quantities to avoid waste
- They respect money and food due to their history

> "Your mannerisms must adapt according to the guests you have onboard. What can be a winning attitude and personal approach on one yacht, can get you fired on the other."`,
        part: 'part5'
      }
    ]
  },
  {
    id: 'part6',
    title: 'Part 6: Maritime Law & Safety',
    description: 'IMO conventions, safety protocols, and emergency procedures',
    slides: [
      {
        id: 'slide17',
        slideNumber: 'SLIDE 17',
        sectionTitle: 'The IMO & Legal Pillars',
        headline: 'Functions of the International Maritime Organisation',
        voIntent: 'The "Four Pillars": SOLAS, STCW, MARPOL, and MLC.',
        interaction: 'Interactive pillar graphic',
        imagePlaceholder: 'Visual representation of the four IMO pillars',
        assessment: 'Knowledge Check: What does each pillar regulate?\n- SOLAS: _______\n- STCW: _______\n- MARPOL: _______\n- MLC: _______',
        voiceoverScript: 'The International Maritime Organization (IMO) maintains four key conventions known as the "Four Pillars": SOLAS (Safety of Life at Sea - vessel construction and equipment), STCW (Standards of Training, Certification and Watchkeeping - crew qualifications), MARPOL (Marine Pollution prevention), and MLC (Maritime Labour Convention - seafarers\' rights).',
        content: `## The International Maritime Organization (IMO)

The IMO is a specialized agency of the United Nations responsible for ensuring that existing international maritime conventions are kept up to date and developing new agreements as needed.

### IMO Facts:
- **Established:** 1948 (came into force 1958)
- **Headquarters:** London
- **Member States:** 174 (as of 2020)
- **Associate Members:** 3

### IMO's Mission Statement:
> "The mission of the International Maritime Organization (IMO) as a United Nations specialized agency is to promote safe, secure, environmentally sound, efficient and sustainable shipping through cooperation."

---

## The Four Pillars of Maritime Law

### 1. SOLAS - Safety of Life at Sea (1974)
**Purpose:** Deals with the safety of life of seafarers by setting minimum safety measures.

**Covers:**
- Construction, equipment, and operation of merchant ships
- 14 chapters including:
  - Fire protection and detection
  - Life-saving appliances
  - Radio communications
  - Safety of navigation
  - Carriage of dangerous goods
  - Management for safe operation of ships

### 2. STCW - Standards of Training, Certification and Watchkeeping
**Purpose:** Sets minimum standards of training and certification for seafarers.

**Covers:**
- Masters, officers, watch personnel
- Seagoing personnel in merchant navy
- Made up of 8 chapters
- **Basic Safety Training Course requirement comes from STCW**

**Key Areas:**
- Personal Survival Techniques (PST)
- Basic Fire Fighting
- Elementary First Aid & CPR
- Personal Safety & Social Responsibility (PSSR)

### 3. MARPOL - Marine Pollution (1973/78)
**Purpose:** Prevention of pollution from ships.

**Background:** Created after Torrey Canyon disaster (1967) - 120,000 tonnes of oil spilled.

**Six Annexes:**
1. Prevention of oil pollution
2. Control of noxious liquid substances
3. Harmful substances in packaged form
4. Prevention of sewage pollution
5. Prevention of garbage pollution
6. Prevention of air pollution

### 4. MLC - Maritime Labour Convention (2006)
**Purpose:** Seafarers' Bill of Rights - sets minimum working and living standards.

**Came into force:** August 20, 2013

**Five Titles:**
1. Minimum requirements for seafarers to work on a ship
2. Conditions of employment
3. Accommodation, recreational facilities, food and catering
4. Health protection, medical care, welfare and social security
5. Compliance and enforcement

> "By setting these minimum standards, IMO is saving the life of seafarers, machinery, ship, and environments because low standards of training and qualification are very likely to create problems and cause a big loss."`,
        part: 'part6'
      },
      {
        id: 'slide18',
        slideNumber: 'SLIDE 18',
        sectionTitle: 'The Maritime Labour Convention (MLC)',
        headline: 'Seafarers\' Bill of Rights',
        voIntent: 'Minimum standards for wages, accommodation, and leave.',
        interaction: 'Expandable info blocks on Hours of Rest',
        imagePlaceholder: 'Infographic showing MLC rights and protections',
        assessment: 'Calculation Exercise: If you work on a yacht with a 5:1 rotation, how many months of vacation do you get per year?',
        voiceoverScript: 'The MLC 2006 establishes minimum standards for seafarers including: minimum age, employment agreements, hours of work/rest (minimum 10 hours rest in 24 hours), wages, paid annual leave (minimum 2.5 days per month), repatriation, medical care, and accommodation standards. These rights are legally enforceable.',
        content: `## Maritime Labour Convention (MLC 2006)

The MLC is an international agreement that sets seafarers' rights to decent working conditions. It is often called the **"Seafarers' Bill of Rights."**

### Key MLC Provisions:

#### 1. Minimum Age
- Minimum age for employment at sea
- Night work restrictions for young seafarers

#### 2. Medical Certificates
- All seafarers must have valid medical certificates
- **ENG1** is the MCA-approved medical certificate required for all crew

#### 3. Training and Qualifications
- Proper training for duties assigned
- Certificates and endorsements required

#### 4. Seafarers' Employment Agreements (SEA)
- Clear written contracts
- Terms and conditions of employment
- Rights and responsibilities

#### 5. Wages
- Regular payment
- Monthly or other agreed period
- Records provided to seafarers

#### 6. Hours of Work and Rest
**Minimum Hours of Rest:**
- **10 hours of rest in any 24-hour period**
- May be divided into **no more than 2 periods**
- **One period must be at least 6 hours**
- **No more than 14 hours between consecutive rest periods**

**Records must be kept** of daily hours of rest.

#### 7. Paid Annual Leave
- **Minimum 2.5 days per month** of paid annual leave
- Public holidays should not count toward this allowance
- Flag states may legislate for leave above this minimum

#### 8. Repatriation
- Right to be repatriated at end of contract
- Employer pays for travel home
- Cannot be charged for repatriation

#### 9. Accommodation and Food
- Decent living conditions
- Nutritious meals
- Clean, safe accommodation

#### 10. Health and Safety
- Safe working environment
- Medical care onboard and ashore
- Accident prevention

#### 11. Onboard Complaint Procedures
- Right to file complaints
- Protection from victimization
- Access to external authorities if needed

### Rotation Schedules:

**Common Rotation Patterns:**
- **5:1** - 5 months on board, 1 month leave (most common for junior crew)
- **4:2** - 4 months on board, 2 months leave
- **3:3** - 3 months on board, 3 months leave

**Calculation Example:**
With a 5:1 rotation:
- 5 months working + 1 month leave = 6-month cycle
- In 12 months: 2 complete cycles
- **Vacation: 2 months per year**

### Temporary Shore Leave:
- Cannot be counted as annual vacation
- Distinction between "temporary shore leave" and "extended shore leave"
- Captain can issue extended shore leave notice that counts as vacation

> "The MLC 2006 establishes minimum standards for seafarers including: minimum age, employment agreements, hours of work/rest, wages, paid annual leave, repatriation, medical care, and accommodation standards. These rights are legally enforceable."`,
        part: 'part6'
      },
      {
        id: 'slide19',
        slideNumber: 'SLIDE 19',
        sectionTitle: 'Safety Culture & Signage',
        headline: 'Safety Management & Signs',
        voIntent: 'Recognizing Prohibition (Red), Warning (Yellow), Mandatory (Blue), and Emergency (Green) signs.',
        interaction: 'Flashcard matching (Symbol to Meaning)',
        imagePlaceholder: 'Collection of maritime safety signs by category',
        assessment: 'Flashcard Matching: Match each sign color to its meaning:\n- Red: Prohibition/Fire equipment\n- Yellow: Warning/Hazard\n- Blue: Mandatory action\n- Green: Emergency escape/First aid',
        voiceoverScript: 'Safety signs use standardized colors: RED for prohibition and fire equipment, YELLOW for warnings and hazards, BLUE for mandatory actions, and GREEN for emergency escape routes and first aid facilities. Recognizing these signs quickly can be life-saving in emergency situations.',
        content: `## Safety Signs and Their Meanings

Safety signs use standardized colors and symbols to communicate important safety information quickly and clearly—regardless of language barriers.

### Safety Sign Colors:

#### 🔴 RED - Prohibition / Fire Equipment
**Meaning:**
- Stop doing something or don't do it (prohibition)
- Stop/shut down or evacuate
- Mark location and type of firefighting equipment

**Examples:**
- No smoking
- No open flames
- Fire extinguisher location
- Fire hose location

**Design:** Red circular band with red diagonal bar on white background

---

#### 🟡 YELLOW - Warning / Hazard
**Meaning:**
- Be careful or take precautions
- Hazard present
- Potential danger

**Examples:**
- Slippery surface
- Toxic materials
- Electrical hazard
- Hot surface

**Design:** Yellow triangle with black border and black symbol

---

#### 🔵 BLUE - Mandatory Action
**Meaning:**
- Take a specific action
- Must be followed
- Required protection

**Examples:**
- Safety helmet must be worn
- Eye protection required
- Life jacket must be worn
- Goggles to be worn

**Design:** Blue disc with white symbol

---

#### 🟢 GREEN - Emergency Escape / First Aid
**Meaning:**
- Emergency escape route
- First aid location
- Safety equipment
- Safe condition

**Examples:**
- Emergency exit
- First aid station
- Assembly point
- Escape route arrow

**Design:** Green square or rectangle with white symbol or text

---

### Additional Sign Types:

#### Illuminated Signs
- Used for temporary hazards or emergencies
- Must be tested regularly
- Battery backup required

#### Acoustic Signals
- Alarms and warning sounds
- Must comply with IMO Code on Alerts and Indicators
- Different sounds for different emergencies

#### Spoken Signals
- Must comply with IMO Standard Marine Communication Phrases
- Important when communicating with non-English speakers

### Gas Cylinder Color Coding:

Gas cylinders are color-coded by contents:
- **Oxygen:** Black body, white neck
- **Acetylene:** Maroon body
- **Propane:** Red body
- **Butane:** Red body, yellow neck
- **CO2:** Grey body

> "Colours and symbols, when used appropriately, can provide information and warnings of hazards that can be understood by anyone, regardless of what language they speak."

### Seafarer Responsibilities:

**All seafarers should:**
- ✓ Understand the meaning of signs and color-coding
- ✓ Follow relevant safety procedures
- ✓ Report any deficient or missing signs
- ✓ Inform supervisor if color vision deficient

**Remember:** Safety signs are there for your protection. Always pay attention to them and follow their instructions immediately.`,
        part: 'part6'
      },
      {
        id: 'slide20',
        slideNumber: 'SLIDE 20',
        sectionTitle: 'Emergency Drills & Protocols',
        headline: 'Muster Stations & Emergency Alarms',
        voIntent: 'Responding to General (7 short, 1 long), Fire, and MOB alarms.',
        interaction: 'Audio-matching exercise for alarm signals',
        imagePlaceholder: 'Muster station diagram with emergency routes',
        assessment: 'Audio Quiz: Identify each alarm type by its sound pattern:\n- 7 short + 1 long = ?\n- Continuous ringing = ?\n- 3 long blasts = ?',
        voiceoverScript: 'Emergency alarms have distinct patterns: General Emergency (7 short + 1 long blast) signals crew to muster stations; Fire Alarm (continuous ringing) indicates fire on board; Man Overboard (3 long blasts) signals a person in the water. Knowing these alarms and your assigned duties is essential for safety.',
        content: `## Emergency Alarms and Drills

### Emergency Alarm Signals:

#### 🔊 GENERAL EMERGENCY ALARM
**Signal:** 7 or more short blasts followed by 1 long blast

**Meaning:** Summon crew to muster stations and initiate duties from muster list

**Actions:**
1. Stop work immediately
2. Proceed to your muster station
3. Listen to PA system for instructions
4. Prepare to act according to your muster list duties

**LSA Code Definition:**
> "The general emergency alarm system shall be capable of sounding the general emergency alarm signal consisting of seven or more short blasts followed by one long blast on the ship's whistle or siren... The system shall be capable of operation from the navigation bridge and audible throughout all the accommodation and normal crew working spaces."

---

#### 🔥 FIRE ALARM
**Signal:** Continuous ringing of the electric ship's bell or continuous long blast by ship's whistle

**Meaning:** Fire on board

**Actions:**
1. Proceed to fire stations
2. Confirm exact location of fire
3. Split into firefighting teams
4. Follow muster list duties

**How to Activate:**
- Manually: Press nearest fire call point
- Automatically: Smoke and fire detectors
- While finding call point: Shout "FIRE FIRE FIRE" continuously

---

#### 🌊 MAN OVERBOARD (MOB) ALARM
**Signal:** 3 long rings of electric bell or 3 long blasts by ship's whistle

**Meaning:** Person in the water

**Actions:**
1. Proceed according to muster list duties
2. Wait for Master's instruction
3. Prepare for rescue operations

**If YOU see someone overboard:**
1. Shout "MAN OVERBOARD ON PORT/STARBARD SIDE"
2. Throw nearest lifebuoy
3. Inform duty officer on bridge immediately
4. Keep person in sight if possible

---

#### ⚓ ABANDON SHIP
**Signal:** Verbal order from Master (no specific alarm sound)

**Meaning:** Vessel not safe, evacuation required

**Actions:**
1. Ensure you have lifejacket and immersion suit
2. Take additional supplies per muster list (water, food, clothes, blankets, medicine)
3. Wait for instructions
4. Proceed to survival craft stations

---

### Muster List

The muster list specifies:
- General emergency alarm details
- Action to be taken by each crew member
- How the order to abandon ship will be given
- Survival craft assignments
- Fire party duties
- Communication equipment assignments

**Must be posted on:**
- Bridge
- Engine room
- Accommodation areas
- Crew working spaces

### Drill Requirements (SOLAS):

**Monthly Drills:**
- Abandon ship drill
- Fire drill

**Every 2 Months:**
- Enclosed space entry and rescue drill

**Within 24 Hours of Departure:**
- If more than 25% of crew haven't participated in drills that month

### On Hearing ANY Alarm:

1. **Don proper clothing** (warm attire, even in summer)
2. **Put on your lifejacket**
3. **Pick up your immersion suit** (if available)
4. **Go to your Muster Station**
5. **Find out the nature of the emergency**
6. **Listen to instructions from seniors**
7. **Take action as per your Muster List assignment**

> "According to SOLAS Convention, drills shall, as far as practicable, be conducted as if there were an actual emergency."`,
        part: 'part6'
      },
      {
        id: 'slide21',
        slideNumber: 'SLIDE 21',
        sectionTitle: 'Accident Reporting',
        headline: 'Reporting Formats & Near Misses',
        voIntent: 'Understanding the MSIU mandate and the necessity of reporting accidents.',
        interaction: 'Flowchart of reporting timeline',
        imagePlaceholder: 'Accident reporting flowchart with timelines',
        assessment: 'Case Study: A crew member slips on a wet deck but appears uninjured. What should happen next?\nA) Nothing - no injury occurred\nB) Report as a near miss\nC) Wait to see if symptoms develop\nD) Clean up the water only',
        voiceoverScript: 'Accident reporting is mandatory and time-sensitive. The Marine Safety Investigation Unit (MSIU) investigates accidents to prevent future occurrences, not to assign blame. Reports must be submitted within 24 hours, and all evidence must be preserved. Near misses should also be reported as they provide valuable learning opportunities.',
        content: `## Accident Reporting

### Why Report Accidents?

The purpose of accident investigation is **NOT to apportion blame** but to:
- Learn from mistakes
- Recommend preventive action
- Improve safety for all seafarers
- Prevent similar accidents in the future

### Marine Safety Investigation Unit (MSIU)

**Authority:**
- Investigates accidents involving Maltese registered ships worldwide
- Investigates foreign flagged ships in Maltese waters
- Has significant authority to investigate
- No other entity may commence a safety investigation

**Important:** MSIU does NOT investigate to apportion blame or determine civil/criminal liability.

### What Must Be Reported?

#### Accidents Include:
- Loss of life or major injury
- Person lost or fallen overboard
- Ship causing loss of life, injury, or damage
- Ship lost or presumed lost
- Ship abandoned
- Material damage by fire, explosion, weather
- Ship grounding or collision
- Ship disabled
- Serious environmental harm
- Collapse of pressure vessel, pipeline, or valve
- Collapse of lifting equipment
- Escape of harmful substances

#### Major Injury Definition:
- Any fracture (except fingers, thumbs, toes)
- Loss of limb or part of limb
- Dislocation of shoulder, hip, knee, or spine
- Loss of sight (temporary or permanent)
- Penetrating injury to the eye
- Injury requiring hospitalization >24 hours

#### Serious Injury Definition:
- Any injury (except major) causing incapacity >3 consecutive days
- Person put ashore and ship sails without them

### Hazardous Incidents / Near Misses

**Definition:** Any event where an accident nearly occurred.

**Examples:**
- Navigational or engineering incidents causing hazard
- Failure of procedures in shipboard operations
- Human failures

**Critical Question:** Did the incident have the potential to lead to an accident?

> "Although there is no statutory requirement to report 'unspecified hazardous incidents', owners and masters are strongly urged to report them voluntarily, since useful lessons can be learned."

### Reporting Timeline:

**Within 24 Hours:**
- Master must send report to relevant Maritime Accident Investigation department
- Use quickest means available

**If Ship is Lost:**
- Owner, master, or senior surviving officer must report
- As soon as practicable

### Evidence Preservation:

**Must be preserved until:**
- Notification received that no investigation will occur, OR
- 28 days after receipt of initial report (if no investigation decision), OR
- Inspector indicates evidence no longer required

**Evidence includes:**
- Charts and log books
- Voyage data records
- Electronic and magnetic recordings
- Video tapes
- All relevant documents
- Equipment related to the accident

**Important:** No alterations to recordings or entries!

### Investigation Outcomes:

- Reports published for other seafarers to learn from
- Recommendations to authorities for new regulations
- Specific checks on certain vessel types
- Industry-wide safety improvements

### The Golden Rule:

> "The purpose of these entities is not to apportion blame or to be used in court proceedings but to learn from somebody's mistakes and recommend preventive action."

### Remember:

- ✓ Report ALL accidents promptly
- ✓ Report near misses voluntarily
- ✓ Preserve all evidence
- ✓ Cooperate fully with investigations
- ✓ Learn from every incident
- ✗ Never hide or cover up accidents
- ✗ Never alter evidence or records

**Safety depends on honest reporting!**`,
        part: 'part6'
      }
    ]
  }
];

export const getSlideById = (id: string) => {
  for (const part of parts) {
    const slide = part.slides.find(s => s.id === id);
    if (slide) return slide;
  }
  return undefined;
};

export const getPartById = (id: string) => {
  return parts.find(p => p.id === id);
};
