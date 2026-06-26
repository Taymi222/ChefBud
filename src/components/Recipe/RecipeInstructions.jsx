export default function RecipeInstructions() {
  const steps = [
    "In a bowl, whisk together eggs, milk, vanilla, and a pinch of cinnamon.",
    "Dip each slice of bread into the egg mixture, coating both sides.",
    "Heat butter in a pan over medium heat.",
    "Cook the bread for 2–3 minutes on each side until golden brown.",
    "Serve warm with your favorite toppings. Enjoy!",
  ];

  return (
    <div className="space-y-4 mt-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex gap-3"
        >
          <div
            className="
              w-5
              h-5
              rounded-full
              bg-[#5C7C5D]
              text-white
              text-[10px]
              flex
              items-center
              justify-center
              shrink-0
              mt-1
            "
          >
            {index + 1}
          </div>

          <p className="text-xs text-[#23352A] leading-5">
            {step}
          </p>
        </div>
      ))}
    </div>
  );
}