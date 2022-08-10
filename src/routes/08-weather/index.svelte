<script>
  import Weather from "$lib/components/08/Weather.svelte";
  const daysOfWeekMap = {
    0: "SUN",
    1: "MON",
    2: "TUES",
    3: "WED",
    4: "THUR",
    5: "FRI",
    6: "SAT",
  };

  const iconNameToSizeMap = {
    cloudy: { width: 264, height: 166 },
    sunny: { width: 208, height: 213 },
    stormy: { width: 246, height: 187 },
    snowy: { width: 230, height: 196 },
    "partly-cloudy": { width: 230, height: 209 },
    rainy: { width: 160, height: 222 },
  };
</script>

<section>
  <div class="wrapper">
    <!-- day - cloudy -->
    <div class="day">
      <div class="day-of-week">Wed</div>
      <div class="date">8</div>

      <div class="bar cloudy">
        <div class="weather">
          <svg role="img">
            <use
              xlink:href="#cloudy"
              width="264"
              height="166"
              viewBox="0 0 264 166"
            />
          </svg>
        </div>
        <div class="temperature">
          72<span class="degrees">&deg;</span>
        </div>
        <div class="content">
          <div class="precipitation">
            <svg role="img" class="icon">
              <use xlink:href="#precipitation" />
            </svg>
            84%
          </div>
          <div class="low">
            <svg role="img" class="icon">
              <use xlink:href="#low" />
            </svg>
            28&deg;
          </div>
        </div>
      </div>
    </div>

    <!-- day - sunny -->
    <div class="day">
      <div class="day-of-week">Thur</div>
      <div class="date">9</div>

      <div class="bar sunny">
        <div class="weather">
          <svg role="img" width="208" height="213" viewBox="0 0 208 213">
            <use xlink:href="#sunny" />
          </svg>
        </div>
        <div class="temperature">
          65<span class="degrees">&deg;</span>
        </div>
        <div class="content">
          <div class="precipitation">
            <svg role="img" class="icon">
              <use xlink:href="#precipitation" />
            </svg>
            84%
          </div>
          <div class="low">
            <svg role="img" class="icon">
              <use xlink:href="#low" />
            </svg>
            28&deg;
          </div>
        </div>
      </div>
    </div>

    <!-- day - stormy -->
    <div class="day">
      <div class="day-of-week">Fri</div>
      <div class="date">10</div>

      <div class="bar stormy">
        <div class="weather">
          <svg role="img" width="246" height="187" viewBox="0 0 246 187">
            <use xlink:href="#stormy" />
          </svg>
        </div>
        <div class="temperature">
          67<span class="degrees">&deg;</span>
        </div>
        <div class="content">
          <div class="precipitation">
            <svg role="img" class="icon">
              <use xlink:href="#precipitation" />
            </svg>
            84%
          </div>
          <div class="low">
            <svg role="img" class="icon">
              <use xlink:href="#low" />
            </svg>
            28&deg;
          </div>
        </div>
      </div>
    </div>

    <!-- day - snowy -->
    <div class="day">
      <div class="day-of-week">Sat</div>
      <div class="date">11</div>

      <div class="bar snowy">
        <div class="weather">
          <svg role="img" width="230" height="196" viewBox="0 0 230 196">
            <use xlink:href="#snowy" />
          </svg>
        </div>
        <div class="temperature">
          32<span class="degrees">&deg;</span>
        </div>
        <div class="content">
          <div class="precipitation">
            <svg role="img" class="icon">
              <use xlink:href="#precipitation" />
            </svg>
            84%
          </div>
          <div class="low">
            <svg role="img" class="icon">
              <use xlink:href="#low" />
            </svg>
            28&deg;
          </div>
        </div>
      </div>
    </div>

    <!-- day - partly cloudy -->
    <div class="day">
      <div class="day-of-week">Sun</div>
      <div class="date">12</div>

      <div class="bar partly-cloudy">
        <div class="weather">
          <svg role="img" width="230" height="209" viewBox="0 0 230 209">
            <use xlink:href="#partly-cloudy" />
          </svg>
        </div>
        <div class="temperature">
          57<span class="degrees">&deg;</span>
        </div>
        <div class="content">
          <div class="precipitation">
            <svg role="img" class="icon">
              <use xlink:href="#precipitation" />
            </svg>
            84%
          </div>
          <div class="low">
            <svg role="img" class="icon">
              <use xlink:href="#low" />
            </svg>
            28&deg;
          </div>
        </div>
      </div>
    </div>

    <!-- day - rainy -->
    <div class="day">
      <div class="day-of-week">Mon</div>
      <div class="date">13</div>

      <div class="bar rainy">
        <div class="weather">
          <svg role="img" width="160" height="222" viewBox="0 0 160 222">
            <use xlink:href="#rainy" />
          </svg>
        </div>
        <div class="temperature">
          63<span class="degrees">&deg;</span>
        </div>
        <div class="content">
          <div class="precipitation">
            <svg role="img" class="icon">
              <use xlink:href="#precipitation" />
            </svg>
            84%
          </div>
          <div class="low">
            <svg role="img" class="icon">
              <use xlink:href="#low" />
            </svg>
            28&deg;
          </div>
        </div>
      </div>
    </div>

    <!-- day - sunny -->
    <div class="day">
      <div class="day-of-week">Tue</div>
      <div class="date">14</div>

      <div class="bar sunny">
        <div class="weather">
          <svg role="img" width="208" height="213" viewBox="0 0 208 213">
            <use xlink:href="#sunny" />
          </svg>
        </div>
        <div class="temperature">
          71<span class="degrees">&deg;</span>
        </div>
        <div class="content">
          <div class="precipitation">
            <svg role="img" class="icon">
              <use xlink:href="#precipitation" />
            </svg>
            84%
          </div>
          <div class="low">
            <svg role="img" class="icon">
              <use xlink:href="#low" />
            </svg>
            28&deg;
          </div>
        </div>
      </div>
    </div>
  </div>
  <Weather />
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Krona+One&family=Oswald&display=swap");

  section {
    background: #e9f5fa;
    padding: 0;
    margin: 0;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #weather {
    position: absolute;
  }

  .wrapper {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  .day {
    color: #4db0d3;
    font-family: "Krona One", sans-serif;
    text-align: center;
  }

  .day-of-week {
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  .date {
    font-size: 4.5rem;
  }

  .cloudy {
    --background: #4db0d3;
    --temperature: #e6df95;
    --content: #d3ebf4;
  }

  .sunny {
    --background: #e6df95;
    --temperature: #4db0d3;
    --content: #247490;
  }

  .stormy {
    --background: #0e2e3a;
    --temperature: #e6df95;
    --content: #d3ebf4;
  }

  .snowy {
    --background: #bce1ef;
    --temperature: #0e2e3a;
    --content: #247490;
  }

  .partly-cloudy {
    --background: #4db0d3;
    --temperature: #e6df95;
    --content: #d3ebf4;
  }

  .rainy {
    --background: #2b8bad;
    --temperature: #e6df95;
    --content: #d3ebf4;
  }

  .bar {
    background: var(--background);
    min-height: 425px;
    border-radius: 50px;
    position: relative;
    width: 164px;
    padding-top: 252px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1),
      11px 4px 34px rgba(32, 77, 92, 0.25);
  }

  .temperature {
    font-family: "Oswald", sans-serif;
    color: var(--temperature);
    font-size: 7rem;
    position: relative;
    padding-bottom: 60px;
  }

  .degrees {
    position: absolute;
    font-size: 3rem;
    top: 20px;
  }

  .content {
    color: var(--content);
  }

  #weather,
  #icon,
  .weather {
    position: absolute;
  }

  .icon {
    fill: currentColor;
    height: 32px;
    width: 32px;
    display: inline-block;
    position: relative;
    top: 10px;
  }

  .precipitation {
    margin-bottom: 10px;
  }

  .low .icon {
    left: -3px;
    position: relative;
  }

  .cloudy .weather {
    left: -26px;
    top: 77px;
  }

  .sunny .weather {
    left: -21px;
    top: 20px;
  }

  .stormy .weather {
    left: -21px;
    top: 40px;
  }

  .snowy .weather {
    left: -25px;
    top: 20px;
  }

  .partly-cloudy .weather {
    left: -14px;
    top: 20px;
  }

  .rainy .weather {
    left: 31px;
    top: -13px;
  }
</style>
