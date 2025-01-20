import { expect, test, describe } from "vitest";
import { getVariantPerformances } from "./function";
import type { FunctionConfig } from "../config/function";
import type { MetricConfig } from "../config/metric";

describe("getVariantPerformances", () => {
  test("getVariantPerformances for dashboard_fixture_extract_entities", async () => {
    const function_name = "dashboard_fixture_extract_entities";
    const function_config = {
      type: "json",
    } as FunctionConfig;
    const metric_name = "dashboard_fixture_jaccard_similarity";
    const metric_config = {
      type: "float",
      level: "inference",
      optimize: "max",
    } as MetricConfig;
    const time_window_unit = "week";

    const result = await getVariantPerformances({
      function_name,
      function_config,
      metric_name,
      metric_config,
      time_window_unit,
    });
    expect(result).toMatchObject([
      {
        period_start: "2024-12-02T00:00:00.000Z",
        variant_name: "gpt4o_initial_prompt",
        count: 18,
        avg_metric: 0.6097883615228865,
        stdev: 0.47275648,
        ci_error: 0.21840234885437046,
      },
      {
        period_start: "2024-12-09T00:00:00.000Z",
        variant_name: "gpt4o_initial_prompt",
        count: 46,
        avg_metric: 0.39694617170354596,
        stdev: 0.40689653,
        ci_error: 0.11758749631538713,
      },
      {
        period_start: "2024-12-16T00:00:00.000Z",
        variant_name: "gpt4o_initial_prompt",
        count: 26,
        avg_metric: 0.5846153864493737,
        stdev: 0.41838107,
        ci_error: 0.1608205039163431,
      },
      {
        period_start: "2024-12-16T00:00:00.000Z",
        variant_name: "llama_8b_initial_prompt",
        count: 20,
        avg_metric: 0.3672619082033634,
        stdev: 0.37131998,
        ci_error: 0.1627381562198926,
      },
      {
        period_start: "2024-12-23T00:00:00.000Z",
        variant_name: "llama_8b_initial_prompt",
        count: 46,
        avg_metric: 0.4359989678082259,
        stdev: 0.3903055,
        ci_error: 0.11279291348764303,
      },
      {
        period_start: "2024-12-30T00:00:00.000Z",
        variant_name: "llama_8b_initial_prompt",
        count: 44,
        avg_metric: 0.40209481391039764,
        stdev: 0.3333203,
        ci_error: 0.09848985179243835,
      },
    ]);
  });
  test("getVariantPerformances for dashboard_fixture_write_haiku", async () => {
    const function_name = "dashboard_fixture_write_haiku";
    const function_config = {
      type: "chat",
    } as FunctionConfig;
    const metric_name = "dashboard_fixture_haiku_rating";
    const metric_config = {
      type: "float",
      level: "inference",
      optimize: "max",
    } as MetricConfig;
    const time_window_unit = "week";

    const result = await getVariantPerformances({
      function_name,
      function_config,
      metric_name,
      metric_config,
      time_window_unit,
    });
    expect(result).toMatchObject([
      {
        period_start: "2024-11-18T00:00:00.000Z",
        variant_name: "initial_prompt_gpt4o_mini",
        count: 32,
        avg_metric: expect.closeTo(0.0004417374475451652, 6),
        stdev: expect.closeTo(0.30695334, 6),
        ci_error: expect.closeTo(0.10635390649509185, 6),
      },
      {
        period_start: "2024-11-25T00:00:00.000Z",
        variant_name: "initial_prompt_gpt4o_mini",
        count: 57,
        avg_metric: expect.closeTo(0.10361847593122277, 6),
        stdev: expect.closeTo(0.43975478, 6),
        ci_error: expect.closeTo(0.1141640103819334, 6),
      },
      {
        period_start: "2024-12-02T00:00:00.000Z",
        variant_name: "initial_prompt_gpt4o_mini",
        count: 56,
        avg_metric: expect.closeTo(0.2647098991022046, 6),
        stdev: expect.closeTo(0.5056544, 6),
        ci_error: expect.closeTo(0.1324389850566572, 6),
      },
      {
        period_start: "2024-12-09T00:00:00.000Z",
        variant_name: "initial_prompt_gpt4o_mini",
        count: 57,
        avg_metric: expect.closeTo(0.1640116744838132, 6),
        stdev: expect.closeTo(0.46050018, 6),
        ci_error: expect.closeTo(0.11954968840072935, 6),
      },
      {
        period_start: "2024-12-16T00:00:00.000Z",
        variant_name: "initial_prompt_gpt4o_mini",
        count: 57,
        avg_metric: expect.closeTo(0.2230634666395194, 6),
        stdev: expect.closeTo(0.49988118, 6),
        ci_error: expect.closeTo(0.12977332384647436, 6),
      },
      {
        period_start: "2024-12-23T00:00:00.000Z",
        variant_name: "initial_prompt_gpt4o_mini",
        count: 55,
        avg_metric: expect.closeTo(0.15373795151033184, 6),
        stdev: expect.closeTo(0.5244488, 6),
        ci_error: expect.closeTo(0.1386046602344979, 6),
      },
      {
        period_start: "2024-12-30T00:00:00.000Z",
        variant_name: "initial_prompt_gpt4o_mini",
        count: 56,
        avg_metric: expect.closeTo(0.18238492407947757, 6),
        stdev: expect.closeTo(0.47483847, 6),
        ci_error: expect.closeTo(0.1243677996248524, 6),
      },
      {
        period_start: "2025-01-06T00:00:00.000Z",
        variant_name: "initial_prompt_gpt4o_mini",
        count: 57,
        avg_metric: expect.closeTo(0.23926746995564094, 6),
        stdev: expect.closeTo(0.55934626, 6),
        ci_error: expect.closeTo(0.14521095480097784, 6),
      },
      {
        period_start: "2025-01-13T00:00:00.000Z",
        variant_name: "initial_prompt_gpt4o_mini",
        count: 57,
        avg_metric: expect.closeTo(0.15460191557608677, 6),
        stdev: expect.closeTo(0.48655924, 6),
        ci_error: expect.closeTo(0.12631483809560237, 6),
      },
      {
        period_start: "2025-01-20T00:00:00.000Z",
        variant_name: "initial_prompt_gpt4o_mini",
        count: 7,
        avg_metric: expect.closeTo(0.17957699046071088, 6),
        stdev: expect.closeTo(0.21977705, 6),
        ci_error: expect.closeTo(0.16281311533756934, 6),
      },
    ]);
  });

  test("getVariantPerformances for ask_question and solved", async () => {
    const function_name = "ask_question";
    const function_config = {
      type: "json",
    } as FunctionConfig;
    const metric_name = "solved";
    const metric_config = {
      type: "boolean",
      level: "episode",
      optimize: "max",
    } as MetricConfig;
    const time_window_unit = "week";

    const result = await getVariantPerformances({
      function_name,
      function_config,
      metric_name,
      metric_config,
      time_window_unit,
    });
    expect(result).toMatchObject([
      {
        period_start: "2024-12-30T00:00:00.000Z",
        variant_name: "baseline",
        count: 23,
        avg_metric: expect.closeTo(0.043478260869565216, 6),
        stdev: expect.closeTo(0.20851441405707477, 6),
        ci_error: expect.closeTo(0.08521739130434784, 6),
      },
    ]);
  });

  test("getVariantPerformances for ask_question and num_questions", async () => {
    const function_name = "ask_question";
    const function_config = {
      type: "json",
    } as FunctionConfig;
    const metric_name = "num_questions";
    const metric_config = {
      type: "float",
      level: "episode",
      optimize: "min",
    } as MetricConfig;
    const time_window_unit = "week";

    const result = await getVariantPerformances({
      function_name,
      function_config,
      metric_name,
      metric_config,
      time_window_unit,
    });
    expect(result).toMatchObject([
      {
        period_start: "2024-12-30T00:00:00.000Z",
        variant_name: "baseline",
        count: 49,
        avg_metric: expect.closeTo(15.653061224489797, 6),
        stdev: expect.closeTo(5.9496174, 6),
        ci_error: expect.closeTo(1.665892868041992, 6),
      },
    ]);
  });
});
