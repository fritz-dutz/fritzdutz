const ProductTags = () => {
  return (
    <div className="w-full">
      <h3 className="text-sm font-mono text-muted-foreground mb-3 tracking-wide">Products</h3>
      <div className="flex gap-3 items-center">
        <span className="px-4 py-2 rounded-full border border-border text-sm text-foreground font-medium">
          Education
        </span>
        <span className="text-sm text-muted-foreground">Coming soon</span>
      </div>
    </div>
  );
};

export default ProductTags;
