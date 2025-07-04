const noOfPara = document.querySelector(".slider1");
      const paraOutput = document.querySelector("#para-val");
      paraOutput.innerHTML = noOfPara.value;

      noOfPara.oninput = function () {
        paraOutput.innerHTML = this.value;
      };

      const noOfWords = document.querySelector(".slider2");
      const wordOutput = document.querySelector("#word-val");
      wordOutput.innerHTML = noOfWords.value;

      noOfWords.oninput = function () {
        wordOutput.innerHTML = this.value;
      };

      const button = document.querySelector("#button");

      const words = [
        "lorem",
        "ipsum",
        "dolor",
        "sit",
        "amet",
        "consectetur",
        "adipiscing",
        "elit",
        "sed",
        "do",
        "eiusmod",
        "tempor",
        "incididunt",
        "ut",
        "labore",
        "et",
        "dolore",
        "magna",
        "aliqua",
      ];

      button.addEventListener("click", generate);

      function generate() {
        const wordCount = noOfWords.value;
        const paraCount = noOfPara.value;
        let content = "";

        for (let i = 0; i < paraCount; i++) {
          for (let j = 0; j < wordCount; j++) {
            let wordIndex = Math.floor(Math.random() * words.length);
            content += words[wordIndex] + " ";
          }
        }

        const setContent = document.querySelector(".result");
        setContent.innerHTML = content;
      }

      const copyBtn = document.querySelector("#copy");
      
      copyBtn.addEventListener("click", copyText);

      function copyText(){
        const text = document.querySelector(".result");
        navigator.clipboard.writeText(text.innerHTML);
      }