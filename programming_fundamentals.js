//============================================== Programming Fundamentals =========================================//

// Write a ~1 sentence summary for each one

          // DRY (Don't Repeat Yourself) - The single most fundamental tenet in programming is to avoid repetition.

          // KISS (Keep it Simple, Stupid!) - Simplicity is best.

          // Avoid creating a YAGNI (You aren't Going to Need it) - If you don't need it yet, don't add it yet.

          // Do the simplest thing that could possibly work - "What is the simplest thing that could work?"

          // Don't make me think - Code should be easliy read and understood.

          // Write code for the maintainer - Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live.

          // Single responsibilty principle - A module should be responsible to one, and only one, actor.

          // Avoid Premature optimization - "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil" - Donald Knuth

          // Separation of concerns - Separating a computer program into distinct sections.

// Which ones surprise you (if any)?

          // KISS and YAGNI surprised me the most mostly because of what the acronyms means.

// Which one is currently giving you the most struggle?

          // I think it may be keeping it simple, because I'm overthinking it mostly.


// Commenting Code

// A function is being made
const f = l => {
          let es = 0, p = 0, c = 1, n = 0 // Setting what es, p, c, and n are going to equal to
          while (c <= l) { // This while loop will loop the parameters (c <= l)
            n = c + p; // Some equation is going on right here --;
            [c, p] = [n, c] // This is seeing if [c,p] is equal to [n, c] 
            es += (c % 2 === 0) ? c : 0 // I think it's doing the PEMDAS thing right here.
          }
          return es // looking for those test results
        }
        
        console.log(f(55)) // I think this 55 is l and that's how the output is 44

////////////////////////////////////////////////////////////////////////////////////////////

// I feel like they could've use nums or evenNums 
// f sense f2 is in use

const f2 = (limit) => {
          let evenSum = 0;
          let previous = 0;
          let current = 1
          while (current <= limit) {
            let next = current + previous;
            previous = current;
            current = next;
            if (current % 2 === 0) {
              evenSum += current;
            }
          }
          return evenSum;
        }
        
        
        console.log(f2(55))
        
        
// It looks like it can work either way, with or wihtout.


